import Image from "next/image";
import Typography from "@mui/material/Typography";
import Contacts from "./contacts";

export function MobileSidebar() {
    return (
        <article className="header-mobile" id="Mobile Sidebar">
            <Image
    width={100}
    height={100}
    className="image"
    src="/images/author.webp"
    alt="author image"
    sizes="(max-width: 600px) 100vw, 100px"
    priority
/>
            <Typography variant="sidebarName">Piotr Maksymiuk</Typography>
            <h2 className="description">Front-End Developer</h2>
            <Contacts />
        </article>
    );
}

export default MobileSidebar;
