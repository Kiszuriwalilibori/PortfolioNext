import Image from "next/image";
import Typography from "@mui/material/Typography";
import Contacts from "./contacts";

export function MobileSidebar() {
    return (
        <header className="header-mobile" id="header-mobile" aria-label="Mobile header with author information and contact links">
            <Image width={150} height={150} className="image" src="/images/author.webp" alt="Portrait of Piotr Maksymiuk, author of this site" sizes="(max-width: 767px) 130px, (max-width: 991px) 140px, 150px" priority />
            <Typography variant="sidebarName">Piotr Maksymiuk</Typography>
            <p className="description">Front-End Developer</p>
            <Contacts />
        </header>
    );
}

export default MobileSidebar;
