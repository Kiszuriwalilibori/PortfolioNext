import Typography from "@mui/material/Typography";

import Contacts from "./Contacts";
import { descriptionSx } from "./DesktopSidebar.styles";

import AuthorImage from "./Image";

const DesktopSidebar = () => {
    return (
        <aside className="sidebar" aria-label="Author information and contact links">
            <div className="author" aria-label="information about site author">
                <AuthorImage />
                <Typography variant="sidebarName">Piotr Maksymiuk</Typography>
                <Typography sx={descriptionSx}>Front-End Developer</Typography>
                <Contacts />
            </div>
        </aside>
    );
};

export default DesktopSidebar;
