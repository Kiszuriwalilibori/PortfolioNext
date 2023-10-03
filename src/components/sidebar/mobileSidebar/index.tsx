import Image from "next/image";
import Typography from "@mui/material/Typography";

import Contacts from "./contacts";
interface Props {
    route: string;
}

function MobileSidebar(props: Props) {
    const { route } = props;
    const postfix = route ? route : "aboutme";
    const className = `header-mobile header-mobile--${postfix}`;

    return (
        <article className={className} aria-label={`header mobile ${postfix}`}>
            <Image width={100} height={100} className="image" src="/images/author.jpg" alt="author foto" />
            <Typography variant="sidebarName">Piotr Maksymiuk</Typography>
            <h2 className="description">Front-End Developer</h2>
            <Contacts />
        </article>
    );
}

export default MobileSidebar;
