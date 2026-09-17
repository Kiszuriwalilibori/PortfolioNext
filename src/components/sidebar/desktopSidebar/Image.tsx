import Box from "@mui/material/Box";
import Image from "next/image";

import { imageContainerSx } from "./Image.styles";

const AuthorImage = () => (
    <Box component="span" sx={imageContainerSx}>
        <Image src="/images/author.webp" alt="Portrait of Piotr Maksymiuk, author of this site" width={150} height={150} sizes="150px" priority />
    </Box>
);

export default AuthorImage;
