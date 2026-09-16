import Image from "next/image";
import Typography from "@mui/material/Typography";

import Contacts from "./contacts";

const DesktopSidebar = () => {
    return (
        <aside className="sidebar" aria-label="Author information and contact links">
            <div className="author" aria-label="information about site author">
                <Image className="image" src="/images/author.webp" alt="Portrait of Piotr Maksymiuk, author of this site" width={150} height={150} sizes="150px" priority={true} />
                <Typography variant="sidebarName">Piotr Maksymiuk</Typography>
                <span className="description">Front-End Developer</span>
                <Contacts />
            </div>
        </aside>
    );
};

export default DesktopSidebar;
