import fs from "node:fs";
import path from "node:path";

const imagesDir = path.resolve("public/images/project_images");
const outputFile = path.resolve("src/data/project-image-dimensions.ts");

const isImage = file => /\.(jpe?g|png|webp)$/i.test(file);

function readPngDimensions(buffer) {
    if (buffer.toString("ascii", 1, 4) !== "PNG") {
        return null;
    }

    return {
        width: buffer.readUInt32BE(16),
        height: buffer.readUInt32BE(20),
    };
}

function readJpegDimensions(buffer) {
    if (buffer[0] !== 0xff || buffer[1] !== 0xd8) {
        return null;
    }

    let offset = 2;

    while (offset < buffer.length) {
        if (buffer[offset] !== 0xff) {
            offset += 1;
            continue;
        }

        const marker = buffer[offset + 1];

        if (marker === 0xd8 || marker === 0xd9 || (marker >= 0xd0 && marker <= 0xd7)) {
            offset += 2;
            continue;
        }

        if (offset + 4 > buffer.length) {
            break;
        }

        const segmentLength = buffer.readUInt16BE(offset + 2);

        if (segmentLength < 2 || offset + 2 + segmentLength > buffer.length) {
            break;
        }

        const isStartOfFrame = (marker >= 0xc0 && marker <= 0xc3) || (marker >= 0xc5 && marker <= 0xc7) || (marker >= 0xc9 && marker <= 0xcb) || (marker >= 0xcd && marker <= 0xcf);

        if (isStartOfFrame) {
            return {
                width: buffer.readUInt16BE(offset + 7),
                height: buffer.readUInt16BE(offset + 5),
            };
        }

        offset += 2 + segmentLength;
    }

    return null;
}

function readWebpDimensions(buffer) {
    if (buffer.toString("ascii", 0, 4) !== "RIFF" || buffer.toString("ascii", 8, 12) !== "WEBP") {
        return null;
    }

    const chunk = buffer.toString("ascii", 12, 16);

    if (chunk === "VP8X") {
        return {
            width: 1 + buffer[24] + (buffer[25] << 8) + (buffer[26] << 16),
            height: 1 + buffer[27] + (buffer[28] << 8) + (buffer[29] << 16),
        };
    }

    if (chunk === "VP8 ") {
        const start = 20;

        for (let i = start; i < buffer.length - 9; i++) {
            if (buffer[i] === 0x9d && buffer[i + 1] === 0x01 && buffer[i + 2] === 0x2a) {
                return {
                    width: buffer.readUInt16LE(i + 3) & 0x3fff,
                    height: buffer.readUInt16LE(i + 5) & 0x3fff,
                };
            }
        }
    }

    if (chunk === "VP8L") {
        const bits = buffer[21] | (buffer[22] << 8) | (buffer[23] << 16) | (buffer[24] << 24);

        return {
            width: 1 + (bits & 0x3fff),
            height: 1 + ((bits >>> 14) & 0x3fff),
        };
    }

    return null;
}

function getDimensions(filePath) {
    const buffer = fs.readFileSync(filePath);

    return readPngDimensions(buffer) ?? readJpegDimensions(buffer) ?? readWebpDimensions(buffer);
}

const files = fs.readdirSync(imagesDir).filter(isImage).sort();

const dimensions = {};

for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const result = getDimensions(filePath);

    if (!result) {
        throw new Error(`Could not read image dimensions: ${file}`);
    }

    dimensions[`/images/project_images/${file}`] = result;
}

const content = `// This file is generated. Do not edit manually.

export const projectImageDimensions = ${JSON.stringify(dimensions, null, 4)} as const;
`;

fs.writeFileSync(outputFile, content);

console.log(`Generated dimensions for ${files.length} project images.`);
