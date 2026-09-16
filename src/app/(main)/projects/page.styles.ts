"use client";

import { Box, Stack, TextField } from "@mui/material";
import { styled } from "@mui/material";

export const ProjectCategoryStack = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(2, 0),
    width: "100%",
}));

export const ChipsContainer = styled(Box)(({ theme }) => ({
    marginLeft: theme.spacing(-0.5),
    "> *": { margin: theme.spacing(0.5) },
}));

export const ProjectCategoryLegend = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
}));

export const ProjectCategoryLegendItem = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
}));

export const ProjectCategoryIndicator = styled(Box)({
    width: 14,
    height: 14,
    borderRadius: "50%",
    flexShrink: 0,
});

export const ProjectSortSwitch = styled(Box)({
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
});

export const ProjectSortControls = styled(Box)(({ theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: theme.spacing(1),
    minHeight: 56,
    boxSizing: "border-box",
    padding: theme.spacing(0.5, 1),
    width: 520,

    border: "2px solid rgba(0, 0, 0, 0.23)",
    borderRadius: theme.spacing(1),

    "&:hover": {
        borderColor: theme.palette.text.secondary,
    },

    "& .sort-label": {
        color: theme.palette.text.secondary,

        marginRight: theme.spacing(0.5),
    },

    "& .active": {
        fontWeight: 600,
        color: theme.palette.text.primary,
    },

    "& .MuiSwitch-root": {
        margin: theme.spacing(0, -0.25),
    },
}));

export const ProjectSearchField = styled(TextField)(({ theme }) => ({
    width: "100%",
    maxWidth: 520,
    margin: theme.spacing(2, 0, 3),

    "& .MuiOutlinedInput-root": {
        borderRadius: theme.spacing(1),
        backgroundColor: "transparent",
        transition: theme.transitions.create(["border-color"]),
        "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: 2,
        },

        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.secondary,
        },
    },

    "& .MuiInputLabel-root": {
        color: theme.palette.text.secondary,
    },

    "& .MuiInputLabel-root.Mui-focused": {
        color: theme.palette.text.primary,
    },

    "& .MuiOutlinedInput-input": {
        padding: theme.spacing(2, 2),
    },
}));
