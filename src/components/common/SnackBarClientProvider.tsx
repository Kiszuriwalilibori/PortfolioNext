"use client";

import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";

interface SnackbarProviderWrapperProps {
    children: ReactNode;
}

export default function SnackbarProviderWrapper({ children }: SnackbarProviderWrapperProps) {
    return (
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={3000}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
        >
            {children}
        </SnackbarProvider>
    );
}
