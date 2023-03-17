import "../styles/globals.css";
import "../styles/general.sass";
import "../styles/style.css";

import { ViewportProvider } from "../contexts/ViewPortProvider";
import { MenuVisibilityContextProvider } from "../contexts/MenuVisibilityProvider";
import type { AppProps } from "next/app";
import AppWithLayouts from './app-with-layouts';

export default function App({ Component, pageProps }: AppProps) {
    return (
      
            <ViewportProvider>
                <MenuVisibilityContextProvider>
                    {AppWithLayouts({Component, pageProps})}
                </MenuVisibilityContextProvider>
            </ViewportProvider>
       
    );
}

const AppType = typeof App;