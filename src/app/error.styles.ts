import Stack from "@mui/material/Stack";
import { styled, type SxProps, type Theme } from "@mui/material/styles";

export const errorStyles = {
    page: {
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 8,
        textAlign: "center",
        backgroundColor: "#ffffff",

        width: "100%",
    },

    code: {
        color: "primary.main",
        fontSize: "clamp(64px, 12vw, 100px)",
        fontWeight: 700,
        lineHeight: 1,
    },
} satisfies Record<string, SxProps<Theme>>;

export const ErrorContent = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    gap: theme.spacing(3),
    maxWidth: 520,
}));

export const ErrorActions = styled(Stack)(({ theme }) => ({
    flexDirection: "column",
    gap: theme.spacing(2),
    paddingTop: theme.spacing(1),

    [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
    },
}));
