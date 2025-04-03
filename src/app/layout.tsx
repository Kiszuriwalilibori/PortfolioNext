import "./globals.css";
import "@/styles/style.css";

import { Navigation, DesktopSidebarWrapper } from "@/components";
import { MenuVisibilityContextProvider, ViewportProvider } from "@/contexts";
import { Pages } from "@/models/pages";
import DesktopSidebar from "@/components/sidebar/desktopSidebar";
import { MobileSidebar } from "@/components/sidebar/mobileSidebar";

import { headers } from "next/headers";
import { metadata } from "../../public/metadata/metadata";

// import { LoggedUser } from "@/components";

export async function generateMetadata() {
    const headerList = headers();
    const pathName = (await headerList).get("x-current-path");
    const page = pathName && pathName.length ? pathName.slice(pathName.lastIndexOf("/") + 1, pathName.length) : "default";
    return metadata[page as Pages];
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <MenuVisibilityContextProvider>
                    <Navigation />
                </MenuVisibilityContextProvider>
                <ViewportProvider>
                    <DesktopSidebarWrapper mobileSidebar={<MobileSidebar />} desktopSidebar={<DesktopSidebar />} />{" "}
                </ViewportProvider>
                {/* <LoggedUser /> */}
                {children}
            </body>
        </html>
    );
}
