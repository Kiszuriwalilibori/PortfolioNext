import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import type { AppProps } from "next/app";

import theme from "../src/themes/theme";
import "../styles/style.css";

import { ViewportProvider } from "../contexts/ViewPortProvider";
import { MenuVisibilityContextProvider } from "../contexts/MenuVisibilityProvider";

import AppWithLayouts from "./appWithLayouts";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ViewportProvider>
            <ThemeProvider theme={theme}>
                <MenuVisibilityContextProvider>
                    <SnackbarProvider
                        maxSnack={3}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                    >
                        {AppWithLayouts({ Component, pageProps })}
                    </SnackbarProvider>
                </MenuVisibilityContextProvider>
            </ThemeProvider>
        </ViewportProvider>
    );
}

const AppType = typeof App;
