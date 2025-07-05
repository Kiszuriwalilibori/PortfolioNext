import "./globals.css";
import "@/styles/style.css";
//test
import { Navigation } from "@/components";
import { MenuVisibilityContextProvider, FirebaseAuthContextProvider } from "@/contexts";
import { Pages } from "@/models/pages";

import { headers } from "next/headers";
import { metadata } from "../../public/metadata/metadata";
import { Noto_Sans } from "next/font/google";
import theme from "@/themes/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import GoogleAnalytics from "@/components/Googleanalytics";
import { GA_TRACKING_ID } from "@/lib/gtag";
import Script from "next/script";

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
            google: "cFu6GdRx-Aw37ldkxLM8oi8l8DqxVXEVswbcZPdsd3o",
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* Google Analytics */}
            {GA_TRACKING_ID && (
                <>
                    <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                    <Script
                        id="google-analytics"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                                   window.dataLayer = window.dataLayer || [];
                                   function gtag(){dataLayer.push(arguments);}
                                   gtag('js', new Date());
                                   gtag('config', '${GA_TRACKING_ID}', {
                                       page_path: window.location.pathname,
                                   });
                               `,
                        }}
                    />
                </>
            )}
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    <FirebaseAuthContextProvider>
                        <body className={fonts.className}>
                            <div id="snackbar-container" style={{ position: "absolute", width: "100%", zIndex: 9999 }} />
                            <SnackbarProviderWrapper>
                                <MenuVisibilityContextProvider>
                                    <GoogleAnalytics />
                                    <LoggedUser />
                                    <Navigation />
                                </MenuVisibilityContextProvider>
                                {children}
                            </SnackbarProviderWrapper>
                        </body>
                    </FirebaseAuthContextProvider>
                </ThemeProvider>
            </AppRouterCacheProvider>
        </html>
    );
}

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-6ENPV4XS95"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-6ENPV4XS95');
// </script>
