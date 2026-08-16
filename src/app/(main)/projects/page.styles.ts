"use client";

import { Box, Stack } from "@mui/material";
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
    justifyContent: "center",
    width: "100%",
});

export const ProjectSortControls = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
}));
