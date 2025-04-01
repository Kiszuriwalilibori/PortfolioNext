import Image from "next/image";
import Typography from "@mui/material/Typography";

import Contacts from "./contacts";
// import { createMobileSidebarData } from "./utils";
// interface Props {
//     route: string;
// }

export function MobileSidebar(/*props: Props*/) {
    // const { route } = props;
    // const data = createMobileSidebarData(route);

    return (
        <article className={/*data.className*/ `header-mobile header-mobile--aboutme`} /*aria-label={data.aria}*/ id="Mobile Sidebar">
            <Image width={100} height={100} className="image" src="/images/author.jpg" alt="author foto" />
            <Typography variant="sidebarName">Piotr Maksymiuk</Typography>
            <h2 className="description">Front-End Developer</h2>
            <Contacts />
        </article>
    );
}

export default MobileSidebar;
