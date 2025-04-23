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
