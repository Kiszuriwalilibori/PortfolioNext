import type { SxProps, Theme } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const notFoundStyles = {
    page: {
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 8,
        textAlign: "center",
        bgcolor: "common.white",
    },

    code: {
        color: "primary.main",
        fontSize: "clamp(64px, 12vw, 100px)",
        fontWeight: 700,
        lineHeight: 1,
    },
} satisfies Record<string, SxProps<Theme>>;

export const NotFoundContent = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    gap: theme.spacing(3),
    maxWidth: 520,
}));

export const NotFoundActions = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    paddingTop: theme.spacing(1),
}));
