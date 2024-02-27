import path from "path";
import fs from "fs";

function createPath() {
    return path.join(process.cwd(), "data", "comments.json");
}
function extractComments(filePath) {
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

export default function handler(req, res) {
    const { method } = req;
    const filePath = createPath();
    const { comments } = extractComments(filePath);

    if (method === "POST") {
        if (!comments) {
            return res.status(404).json({
                status: 404,
                message: "Comments not found",
            });
        }

        const { author, authorImage, active, content, created, ID, project } = req.body;

        const updatedComments = [...comments, { ...req.body }];

        fs.writeFileSync(filePath, JSON.stringify({ comments: updatedComments }));
        res.status(200).json({
            message: `updatedComments: " ${JSON.stringify(updatedComments)}`,
        });
    }
}
