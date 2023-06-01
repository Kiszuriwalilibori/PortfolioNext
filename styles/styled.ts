import { Box, Button, Stack, styled } from "@mui/material";

export const ChipsContainer = styled(Box)(({ theme }) => ({
    marginLeft: theme.spacing(-0.5),
    "> *": { margin: theme.spacing(0.5) },
}));

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
}));
export const MoreButtonContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    bottom: "0",
    left: "0",
}));

export const ProjectCategoryStack = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(2, 0),
    width: "100%",
}));
