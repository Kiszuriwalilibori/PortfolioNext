import "../styles/style.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/themes/theme";
import { ViewportProvider } from "../contexts/ViewPortProvider";
import { MenuVisibilityContextProvider } from "../contexts/MenuVisibilityProvider";
import type { AppProps } from "next/app";
import AppWithLayouts from "./app-with-layouts";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ViewportProvider>
            <ThemeProvider theme={theme}>
                <MenuVisibilityContextProvider>
                    {AppWithLayouts({ Component, pageProps })}
                </MenuVisibilityContextProvider>
            </ThemeProvider>
        </ViewportProvider>
    );
}

const AppType = typeof App;
