import { Box, styled, Typography } from "@mui/material";

export const NotFoundContainer = styled(Box)(() => ({ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }));
export const NotFoundTitle = styled(Typography)(({ theme }) => ({ color: theme.palette.error.main, fontSize: "2.5rem", fontWeight: 700, textAlign: "center", textShadow: "0 2px 8px rgba(0, 0, 0, 0.08)" }));
