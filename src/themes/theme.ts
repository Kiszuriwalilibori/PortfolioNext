"use client";

import { createTheme } from "@mui/material";

import { common } from "@mui/material/colors";
import { design } from "./design";

declare module "@mui/material/styles" {
    interface TypographyVariants {
        singleProjectLink: React.CSSProperties;
        sidebarName: React.CSSProperties;
        pageTitle: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        singleProjectLink?: React.CSSProperties;
        sidebarName: React.CSSProperties;
        pageTitle: React.CSSProperties;
    }
    interface Palette {
        active: Palette["primary"];
    }

    interface PaletteOptions {
        active?: PaletteOptions["primary"];
    }
}
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        singleProjectLink: true;
        sidebarName: true;
        pageTitle: true;
    }
}

let theme = createTheme({
    palette: {
        primary: {
            main: design.primary.main,
            dark: design.primary.dark,
            light: design.primary.light,
        },
        secondary: {
            main: design.secondary.main,
            dark: design.secondary.dark,
            light: design.secondary.light,
            contrastText: design.secondary.contrastText,
        },
        active: {
            main: design.active.main,
            light: design.active.light,
            dark: design.active.dark,
            contrastText: common.black,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: design.breakpoints.values.sm,
            md: design.breakpoints.values.md,
            lg: design.breakpoints.values.lg,
            xl: design.breakpoints.values.xl,
        },
    },
});

theme = createTheme(theme, {
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: design.focusColor,
                        borderWidth: "3px",
                    },
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    "&.Mui-focusVisible": {
                        outline: `3px solid ${design.focusColor}`,
                        outlineOffset: "3px",
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.secondary.main,
                    display: "inline-flex",
                    color: theme.palette.secondary.contrastText,
                    padding: theme.spacing(0.5, 1),
                    border: `1px solid ${theme.palette.secondary.dark}`,
                    fontSize: "12px",
                    textTransform: "uppercase",
                    borderRadius: "0",
                    boxShadow: theme.shadows[2],
                    margin: 2,
                    minHeight: "40px",
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.light,
                        borderColor: theme.palette.secondary.main,
                    },
                },
            },
        },
    },
    typography: {
        pageTitle: {
            lineHeight: 1,
            fontSize: "36px",
            fontWeight: 400,
            textTransform: "uppercase",
            padding: theme.spacing(5, 0),
            letterSpacing: "0.6px",
            color: "black",
        },

        subtitle1: {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.6px",
        },
        subtitle2: {
            fontSize: "18px",
            fontWeight: theme.typography.fontWeightLight,
            lineHeight: 1.5,
            marginBottom: "0.66em",
            letterSpacing: "0.6px",
            [theme.breakpoints.down("sm")]: {
                fontSize: theme.typography.htmlFontSize,
                marginBottom: "0.5em",
            },
        },
        h1: {
            color: common.white,
            fontSize: "22px",
            fontWeight: theme.typography.fontWeightMedium,
            textTransform: "uppercase",
            letterSpacing: "0.6px",
            lineHeight: "32px",
            "@media (max-width:767px)": {
                fontWeight: theme.typography.fontWeightBold,
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: theme.typography.htmlFontSize,
                fontWeight: theme.typography.fontWeightBold,
                letterSpacing: "1.8px",
                lineHeight: "23px",
            },
        },
        sidebarName: {
            display: "block",
            color: common.white,
            fontSize: "22px",
            fontWeight: theme.typography.fontWeightRegular,
            textTransform: "uppercase",
            letterSpacing: "1px",
            lineHeight: "32px",
            "@media (max-width:767px)": {
                fontWeight: theme.typography.fontWeightBold,
                position: "relative",
                top: "24px",
                paddingLeft: "12px",
            },

            [theme.breakpoints.down("sm")]: {
                fontSize: theme.typography.htmlFontSize,
                fontWeight: theme.typography.fontWeightBold,
                letterSpacing: "1.8px",
                lineHeight: "23px",
                paddingLeft: "unset",
                textAlign: "center",
                top: "154px",
                marginTop: "24px",
                position: "relative",
            },
        },
        h5: {
            lineHeight: 1,
            fontSize: "24px",
            fontWeight: theme.typography.fontWeightLight,
            marginBottom: "1em",
            letterSpacing: "0.6px",
            [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
                marginBottom: "0.8em",
            },
        },
        h3: {
            lineHeight: 1,
            fontSize: "24px",
            fontWeight: theme.typography.fontWeightLight,
            // marginBottom: "1em",
            letterSpacing: "0.6px",
            [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
                marginBottom: "0.8em",
            },
        },
        singleProjectLink: {
            "&:hover": {
                textDecoration: "underline",
                color: theme.palette.primary.dark,
            },
        },
    },
});
export default theme;
