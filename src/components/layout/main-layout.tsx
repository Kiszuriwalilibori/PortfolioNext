import React from "react";

import Footer from "../footer";
import Sidebar from "../sidebar";
import Head from "../head/head";
import Navigation from "../navigation";

import { Roboto } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

//TODO default font, does it work?
type Props = {
    children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${roboto.style.fontFamily};
                }
            `}</style>
            <Head />
            <Sidebar />
            <Navigation />
            <main /*className="roboto.className"*/>{children}</main>
            <Footer />
        </>
    );
};
export default MainLayout;
