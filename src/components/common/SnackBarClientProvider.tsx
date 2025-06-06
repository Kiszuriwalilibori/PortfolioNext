"use client";

import { SnackbarProvider } from "notistack";
import { ReactNode, useEffect, useRef } from "react";

interface SnackbarProviderWrapperProps {
    children: ReactNode;
}

export default function SnackbarProviderWrapper({ children }: SnackbarProviderWrapperProps) {
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        containerRef.current = document.getElementById("snackbar-container");
    }, []);

    const domRoot = containerRef.current ?? undefined;

    return (
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={3000}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
            domRoot={domRoot}
        >
            {children}
        </SnackbarProvider>
    );
}
