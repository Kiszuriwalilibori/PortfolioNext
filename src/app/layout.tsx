import { headers } from "next/headers";
import { metadata } from "../../public/metadata";
import { Pages } from "@/types";

import "./globals.css";
import "../../styles/style.css";
import Navigation from "@/components/navigation";
import { MenuVisibilityContextProvider } from "@/contexts";

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
                {children}
            </body>
        </html>
    );
}
