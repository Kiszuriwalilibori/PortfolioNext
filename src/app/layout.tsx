import "./globals.css";
import "@/styles/style.css";

import { Navigation } from "@/components";
import { MenuVisibilityContextProvider, FirebaseAuthContextProvider } from "@/contexts";
import { Pages } from "@/models/pages";

import { headers } from "next/headers";
import { metadata } from "../../public/metadata/metadata";
import { Noto_Sans } from "next/font/google";
import theme from "@/themes/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const fonts = Noto_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

import { LoggedUser } from "@/components";

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
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    <FirebaseAuthContextProvider>
                        <body className={fonts.className}>
                            <MenuVisibilityContextProvider>
                                <LoggedUser />
                                <Navigation />
                            </MenuVisibilityContextProvider>

                            {children}
                        </body>
                    </FirebaseAuthContextProvider>
                </ThemeProvider>
            </AppRouterCacheProvider>
        </html>
    );
}
