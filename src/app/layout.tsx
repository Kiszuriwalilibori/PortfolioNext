import { headers } from "next/headers";
import { metadata } from "../../public/metadata";

import "./globals.css";
import "../../styles/style.css";

import { Navigation, DesktopSidebarWrapper } from "@/components";
import { MenuVisibilityContextProvider, ViewportProvider } from "@/contexts";
import { Pages } from "@/models/pages";
import DesktopSidebar from "@/components/sidebar/desktopSidebar";
// import { MobileSidebarWrapper } from "@/components/sidebar/mobileSidebarWrapper";
// import { MobileSidebar } from "@/components/sidebar/mobileSidebar";

// import { LoggedUser } from "@/components";
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
                    <DesktopSidebarWrapper>
                        <DesktopSidebar />
                    </DesktopSidebarWrapper>
                    {/* <MobileSidebarWrapper>
                        <MobileSidebar />
                    </MobileSidebarWrapper> */}
                </ViewportProvider>
                {/* <LoggedUser /> */}

                {children}
            </body>
        </html>
    );
}
