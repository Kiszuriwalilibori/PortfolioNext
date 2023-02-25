import React from "react";
import Footer from "../footer";
import Header from "../header";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="inter.className">{children}</main>
            <Footer />
        </>
    );
};
export default MainLayout;
