import { createTheme } from "@mui/material";

import { COLOR_RED_SUBDUED_DARKER, COLOR_RED_SUBDUED_LIGHTER, COLOR_RED_SUBDUED, COLOR_RED_VIVID } from "./constans";

let theme = createTheme({
    palette: {
        primary: {
            main: COLOR_RED_SUBDUED,
            dark: COLOR_RED_VIVID,
            light: COLOR_RED_SUBDUED_LIGHTER,
        },
    },
});

theme = createTheme(theme, {
    components: {
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.primary.main,
                    display: "inline-flex",
                    color: theme.palette.common.white,
                    padding: theme.spacing(0.5, 1),
                    border: `1px solid ${theme.palette.common.black}`,
                    fontSize: "12px",
                    textTransform: "uppercase",
                    borderRadius: "0",
                    boxShadow: theme.shadows[1],
                },
            },
        },
    },
});
export default theme;

// todo są akurat trzy wersje czerwonego rózniące sie nasyceniem i trzy wersje border, zrobi z tego constans
