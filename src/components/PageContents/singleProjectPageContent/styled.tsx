import { Box, Stack, styled } from "@mui/material";

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
    "& svg": {
        display: "inline-block",
        height: "1em",
        overflow: "visible",
        verticalAlign: "-0.125em",
        color: theme.palette.primary.dark,
        marginRight: theme.spacing(1),
    },
}));
