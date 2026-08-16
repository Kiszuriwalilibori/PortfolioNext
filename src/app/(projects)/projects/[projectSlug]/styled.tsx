"use client";

import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";

import theme from "@/themes";
import { AccordionSummary, Box, Button, Stack, styled } from "@mui/material";

const PROJECT_BUTTON_SIZE = "40px";

export const SingleProjectInformations = styled(Stack)(({ theme }) => ({
    maxWidth: "1500px",
    margin: "0 auto",
    backgroundColor: theme.palette.common.white,
    padding: `${theme.spacing(3.75)} 0`,
}));

export const SingleProjectInformationsColumn = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    flexBasis: 0,
    padding: theme.spacing(1.25),
    "&>h2": { paddingBottom: theme.spacing(1) },
}));

export const StackDivider = () => <Divider orientation={useMediaQuery(theme.breakpoints.down("md")) ? "horizontal" : "vertical"} flexItem sx={{ backgroundColor: theme.palette.primary.light }} />;

export const Summary = styled(AccordionSummary)(() => ({}));

export const SummaryStack = styled(Stack)(() => ({
    alignItems: "center",
}));

export const UserCard = styled(Card)(({ theme }) => ({
    maxWidth: 300,
    position: "fixed",
    left: "1vw",
    top: "1vh",
    backgroundColor: theme.palette.common.white,
    color: "#00524C",
    border: "1px solid",
    cursor: "default !important",
    zIndex: "3000",
}));

export const NextButton = styled(Button)(({ theme }) => ({
    position: "fixed",
    right: theme.spacing(2),
    top: "50vh",
    color: theme.palette.common.black,
    width: PROJECT_BUTTON_SIZE,
    height: PROJECT_BUTTON_SIZE,
    minWidth: "unset",
    borderRadius: "50%",
    backgroundColor: theme.palette.error.main,
    zIndex: 1000,
    "&:hover": {
        backgroundColor: theme.palette.error.light,
    },
    "@media (min-width:1612px)": {
        right: "calc(50vw - 750px - 56px)",
    },
}));

export const PreviousButton = styled(Button)(({ theme }) => ({
    position: "fixed",
    left: theme.spacing(2),
    top: "50vh",
    color: theme.palette.common.black,
    width: PROJECT_BUTTON_SIZE,
    height: PROJECT_BUTTON_SIZE,
    minWidth: "unset",
    borderRadius: "50%",
    backgroundColor: theme.palette.error.main,
    zIndex: 1000,
    "&:hover": {
        backgroundColor: theme.palette.error.light,
    },
    "@media (min-width:1612px)": {
        left: "calc(50vw - 750px - 56px)",
    },
}));

export const CommentsButton = styled(Button)(({ theme }) => ({
    display: "block",
    margin: "0 auto",
    marginTop: theme.spacing(4),
}));
import { SystemStyleObject, Theme } from "@mui/system";

export const projectLinkSx: SystemStyleObject<Theme> = {
    display: "flex",
    alignItems: "center",
    gap: "4px",

    height: "48px",

    borderRadius: "4px",

    textDecoration: "none",

    transition: "background-color 150ms ease",

    "&:hover": {
        backgroundColor: "action.hover",
    },

    "&:focus-visible": {
        outline: "3px solid #036397",
        outlineOffset: "2px",
    },
    "& svg": {
        display: "inline-block",
        height: "1em",
        overflow: "visible",
        verticalAlign: "-0.125em",
        color: theme.palette.primary.dark,
        marginRight: theme.spacing(1),
        // display: "inline-block",
        // height: "1em",
        // overflow: "visible",
        // verticalAlign: "-0.125em",
        // color: theme.palette.primary.dark,
    },
};
