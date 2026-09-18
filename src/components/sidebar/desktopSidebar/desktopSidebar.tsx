import Typography from "@mui/material/Typography";

import Contacts from "./Contacts";
import { authorSx, descriptionSx, sidebarSx } from "./DesktopSidebar.styles";

import AuthorImage from "./Image";
import Box from "@mui/material/Box";

const DesktopSidebar = () => {
    return (
        <Box component="aside" sx={sidebarSx} aria-label="Author information and contact links">
            <Box sx={authorSx} aria-label="information about site author">
                <AuthorImage />
                <Typography variant="sidebarName">Piotr Maksymiuk</Typography>
                <Typography sx={descriptionSx}>Front-End Developer</Typography>
                <Contacts />
            </Box>
        </Box>
    );
};

export default DesktopSidebar;
