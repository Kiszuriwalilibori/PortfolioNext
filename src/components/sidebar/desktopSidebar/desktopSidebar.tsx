import Image from "next/image";
import Typography from "@mui/material/Typography";

import Contacts from "./contacts";
import { test } from "@/utils/test";

const DesktopSidebar = () => {
    test();

    return (
        <aside className="sidebar" aria-label="Author information and contact links">
            <div className="author" aria-label="information about site author">
                <Image className="image" src="/images/author.webp" alt="author image" width={500} height={500} priority={true} />
                <Typography variant="sidebarName">Piotr Maksymiuk</Typography>
                <span className="description">Front-End Developer</span>
                <Contacts />
            </div>
        </aside>
    );
};

export default DesktopSidebar;
