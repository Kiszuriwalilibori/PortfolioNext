import "../styles/globals.css";
import "../styles/general.sass";
import "../styles/style.css";

import MainLayout from "../src/components/layout/main-layout";
import { ViewportProvider } from "../contexts/ViewPortProvider";
import { MenuVisibilityContextProvider } from "../contexts/MenuVisibilityProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ViewportProvider>
                <MenuVisibilityContextProvider>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </MenuVisibilityContextProvider>
            </ViewportProvider>
        </>
    );
}
