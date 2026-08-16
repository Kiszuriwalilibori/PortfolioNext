import { Accordion, AccordionDetails, AccordionSummary, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProjectPaper = styled(Paper)({
    backgroundColor: "rgba(255, 255, 255, 0.2)",
});

export const ProjectAccordion = styled(Accordion)({
    backgroundColor: "transparent",

    "&::before": {
        display: "none",
    },
});

export const ProjectAccordionHeader = styled(AccordionSummary)({
    backgroundColor: "rgba(0, 0, 0, 0.08)",

    "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.12)",
    },

    "& .MuiAccordionSummary-content": {
        alignItems: "center",
    },
});

export const ProjectHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    width: "100%",
}));

export const ProjectCategoryIndicator = styled(Box, {
    shouldForwardProp: prop => prop !== "category",
})<{ category: string }>(({ theme, category }) => ({
    width: 14,
    height: 14,
    borderRadius: "50%",
    backgroundColor: category === "A" ? theme.palette.success.main : theme.palette.warning.main,
    flexShrink: 0,
}));

export const ProjectAccordionDetails = styled(AccordionDetails)({
    padding: 0,
});
