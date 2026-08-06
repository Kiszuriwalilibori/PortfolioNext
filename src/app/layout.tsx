import "./globals.css";
import "@/styles/style.css";

import Navigation from "@/components/navigation/Navigation";
import { MenuVisibilityContextProvider, FirebaseAuthContextProvider } from "@/contexts";
import { Pages } from "@/models/pages";

import { headers } from "next/headers";
import { metadata } from "../../public/metadata/metadata";
import { Noto_Sans } from "next/font/google";
import theme from "@/themes/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import { isValidGaId } from "@/lib/gtag";
import { GoogleAnalytics } from "@next/third-parties/google";

const fonts = Noto_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

import { LoggedUser } from "@/components";
import SnackbarProviderWrapper from "@/components/common/SnackBarClientProvider";

export async function generateMetadata() {
    const headerList = headers();
    const pathName = (await headerList).get("x-current-path");
    const page = pathName && pathName.length ? pathName.slice(pathName.lastIndexOf("/") + 1, pathName.length) : "default";
    return {
        ...metadata[page as Pages],
        verification: {
            google: process.env.GOOGLE_VERIFICATION_TOKEN,
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const gaId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
    const validId = isValidGaId(gaId) ? gaId : undefined;
    return (
        <html lang="en">
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    <FirebaseAuthContextProvider>
                        <body className={fonts.className}>
                            <div id="snackbar-container" style={{ position: "absolute", width: "100%", zIndex: 9999 }} />
                            <SnackbarProviderWrapper>
                                <MenuVisibilityContextProvider>
                                    <LoggedUser />
                                    <Navigation />
                                </MenuVisibilityContextProvider>
                                {children}
                            </SnackbarProviderWrapper>
                            {gaId && validId && <GoogleAnalytics gaId={gaId} />}
                        </body>
                    </FirebaseAuthContextProvider>
                </ThemeProvider>
            </AppRouterCacheProvider>
        </html>
    );
}
