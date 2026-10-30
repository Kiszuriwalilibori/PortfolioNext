"use client";
import Link from "next/link";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { NotFoundActions, NotFoundContent, notFoundStyles } from "./not-found.styles";

export default function NotFound() {
    return (
        <Box component="main" sx={notFoundStyles.page}>
            <NotFoundContent>
                <Typography component="p" sx={notFoundStyles.code}>
                    404
                </Typography>

                <Typography component="h1" variant="h5">
                    Nie znaleziono strony
                </Typography>

                <Typography color="text.secondary">Strona, której szukasz, nie istnieje lub została przeniesiona.</Typography>

                <NotFoundActions>
                    <Button component={Link} href="/" variant="contained">
                        Wróć na stronę główną
                    </Button>
                </NotFoundActions>
            </NotFoundContent>
        </Box>
    );
}
