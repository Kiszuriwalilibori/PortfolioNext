import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";

import theme from "../src/themes/theme";
import "../styles/style.css";

import { ViewportProvider, MenuVisibilityContextProvider, AuthContextProvider } from "contexts";

import AppWithLayouts from "./appWithLayouts";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthContextProvider>
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
        </AuthContextProvider>
    );
}

const AppType = typeof App;
