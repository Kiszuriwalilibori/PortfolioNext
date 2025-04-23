import { Box, styled } from "@mui/material";

export const ChipsContainer = styled(Box)(({ theme }) => ({
    marginLeft: theme.spacing(-0.5),
    "> *": { margin: theme.spacing(0.5) },
}));
