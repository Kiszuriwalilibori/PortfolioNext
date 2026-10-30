"use client";

import { useEffect } from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ErrorActions, ErrorContent, errorStyles } from "@/app/error.styles";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error("Application error:", {
            message: error.message,
            digest: error.digest,
            error,
        });
    }, [error]);

    return (
        <Box component="main" role="alert" sx={errorStyles.page}>
            <ErrorContent>
                <Typography component="p" sx={errorStyles.code}>
                    500
                </Typography>

                <Typography component="h1" variant="h5">
                    Coś poszło nie tak
                </Typography>

                <Typography color="text.secondary">Wystąpił nieznany błąd. Spróbuj jeszcze raz albo wróć do strony głównej.</Typography>

                {error.digest && (
                    <Typography variant="caption" color="text.secondary">
                        Identyfikator błędu: {error.digest}
                    </Typography>
                )}

                <ErrorActions>
                    <Button variant="contained" onClick={reset}>
                        Sprobuj ponownie
                    </Button>

                    <Button component={Link} href="/" variant="outlined">
                        Powrót do strony głównej
                    </Button>
                </ErrorActions>
            </ErrorContent>
        </Box>
    );
}
