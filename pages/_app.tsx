import "../styles/globals.css";
import "../styles/general.sass";
import "../styles/style.css";

import MainLayout from "../src/components/layout/main-layout";
import { ViewportProvider } from "../contexts/ViewPortProvider";
import { MenuVisibilityContextProvider } from "../contexts/MenuVisibilityProvider";
import type { AppProps } from "next/app";
import MyApp from './myapp';







export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ViewportProvider>
                <MenuVisibilityContextProvider>
                    {MyApp({Component, pageProps})}
                    {/* <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout> */}
                </MenuVisibilityContextProvider>
            </ViewportProvider>
        </>
    );
}

const AppType = typeof App;