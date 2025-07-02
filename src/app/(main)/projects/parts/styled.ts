"use client";

import { Box, Button, Checkbox as RawCheckbox, FormControlLabel, styled } from "@mui/material";

export const MoreButtonStyled = styled(Button)(({ theme }) => ({
    width: "120px",
    height: "60px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    borderRadius: "0",
    boxShadow: theme.shadows[2],
    border: `1px solid ${theme.palette.common.black}`,
    "&:hover": { boxShadow: theme.shadows[3] },
    "&: svg": { height: "1em" },
}));

export const LabelledCheckbox = styled(FormControlLabel)(({ theme }) => ({
    color: "white",
    border: "1px solid #a03636",
    paddingRight: "10px",
    backgroundColor: "#a06b36",
    opacity: 0.8,
    marginBottom: "0",
    cursor: "pointer",
    margin: theme.spacing(0.5),
    "& span": {
        fontSize: "14px !important",
        fontWeight: 400,
        lineHeight: 1.14285714,
        letterSpacing: ".6px",
        paddingTop: theme.spacing(0.75),
        paddingBottom: theme.spacing(0.75),
    },
    boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n        0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
}));

export const CheckboxGroup = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "block",
    marginLeft: -theme.spacing(0.5),
}));

export const Checkbox = styled(RawCheckbox)(({ theme }) => ({
    color: theme.palette.common.white,
    "&.Mui-checked": {
        color: theme.palette.primary.dark,
    },
}));

export const FeaturesBox = styled(Box)(() => ({
    marginTop: 20,
    width: 240,
}));

export const FeaturesWrapper = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));
