import "../styles/globals.css";
import "../styles/general.sass";
import "../styles/style.css";

import MainLayout from "../src/components/layout/main-layout";
import { ViewportProvider } from "../contexts/ViewPortProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ViewportProvider>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </ViewportProvider>
        </>
    );
}
