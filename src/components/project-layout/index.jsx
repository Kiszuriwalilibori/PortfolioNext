import Head from "../head";

import Navbar from "../header/navbar";
import MenuToggler from "../header/menuToggler";

export default function ProjectLayout({ children }) {
    return (
        <>
            <Head />
            <Navbar />
            <MenuToggler />
            <main>{children}</main>
        </>
    );
}
