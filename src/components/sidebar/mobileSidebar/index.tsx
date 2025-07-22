import Image from "next/image";
import Typography from "@mui/material/Typography";
import Contacts from "./contacts";

export function MobileSidebar() {
    return (
        <article className="header-mobile" id="Mobile Sidebar">
            <Image
    width={150}
    height={150}
    className="image"
    src="/images/author.webp"
    alt="author image"
    sizes="(max-width: 767px) 130px, (max-width: 991px) 140px, 150px"
    priority
/>
            <Typography variant="sidebarName">Piotr Maksymiuk</Typography>
            <h2 className="description">Front-End Developer</h2>
            <Contacts />
        </article>
    );
}

export default MobileSidebar;
