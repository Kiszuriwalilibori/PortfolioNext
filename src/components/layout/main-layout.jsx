import React from "react";
import Footer from "../footer";
import Header from "../header";
import Head from "../head";

import { Roboto } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const MainLayout = ({ children }) => {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${roboto.style.fontFamily};
                }
            `}</style>
            <Head />
            <Header />
            <main /*className="roboto.className"*/>{children}</main>
            <Footer />
        </>
    );
};
export default MainLayout;
