import { Button, styled } from "@mui/material";

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
