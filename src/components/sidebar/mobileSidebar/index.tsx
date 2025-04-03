import Image from "next/image";
import { headers } from "next/headers";
import Typography from "@mui/material/Typography";

import Contacts from "./contacts";
import { createMobileSidebarData } from "./utils";
// import { revalidatePath } from "next/cache";
// interface Props {
//     route: string;
// }

export async function MobileSidebar(/*props: Props*/) {
    const headerList = headers();

    const pathName = (await headerList).get("x-current-path");
    // console.log("headerList", pathName);
    const page = pathName && pathName.length ? pathName.slice(pathName.lastIndexOf("/") + 1, pathName.length) : "default";
    // const { route } = props;
    // const data = createMobileSidebarData(route);
    const data = createMobileSidebarData(page);
    // console.log("data", data);
    return (
        <article className={data.className} aria-label={data.aria} id="Mobile Sidebar">
            <Image width={100} height={100} className="image" src="/images/author.jpg" alt="author foto" />
            <Typography variant="sidebarName">Piotr Maksymiuk</Typography>
            <h2 className="description">Front-End Developer</h2>
            <Contacts />
        </article>
    );
}

export default MobileSidebar;
