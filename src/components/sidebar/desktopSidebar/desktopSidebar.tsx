import Image from "next/image";
import Typography from "@mui/material/Typography";

import Contacts from "./contacts";
import { test } from "../test";

const DesktopSidebar = () => {
    test();

    return (
        <aside className="sidebar" id="Large Sidebar">
            <article className="author" aria-label="informations about site author">
                <Image className="image" src="/images/author.webp" alt="author foto" width={500} height={500} priority={true} />
                <Typography variant="sidebarName">Piotr Maksymiuk</Typography>
                <span className="description">Front-End Developer</span>
                <Contacts />
            </article>
        </aside>
    );
};

export default DesktopSidebar;
