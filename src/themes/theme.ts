"use client";

import { createTheme } from "@mui/material";

import { /*COLOR_RED_SUBDUED_DARKER,*/ COLOR_RED_SUBDUED_LIGHTER, COLOR_RED_SUBDUED, COLOR_RED_VIVID } from "./constans";
import { common } from "@mui/material/colors";

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
            main: COLOR_RED_SUBDUED,
            dark: COLOR_RED_VIVID,
            light: COLOR_RED_SUBDUED_LIGHTER,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 991,
            xl: 1024,
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
                // label: {
                //     backgroundColor: theme.palette.primary.main,
                //     color: theme.palette.common.white,
                // },
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
            marginBottom: "1em",
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
