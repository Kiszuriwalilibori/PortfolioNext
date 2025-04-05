import { styled } from "@mui/material";

export const Company = styled("h2")(({ theme }) => ({
    color: "#232A34 !important",
    fontSize: "1.25rem !important",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    lineHeight: 1,
    fontWeight: 400,
    textTransform: "uppercase",
    letterSpacing: "0.6px",
}));

export const Position = styled("h3")(({ theme }) => ({
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    lineHeight: 1,
    fontSize: "clamp(18.75px, 3.125vw, 24px) !important",
    fontWeight: 300,
}));

export const Duties = styled("p")(() => ({
    margin: "1em 0 0 !important",
    lineHeight: `1.6 !important`,
    fontSize: `14px !important`,
    fontWeight: `500 !important`,
}));

export const Project = styled("h4")(({ theme }) => ({
    lineHeight: `1 !important`,
    fontSize: "18px !important",
    fontWeight: `200 !important`,
    paddingBottom: `${theme.spacing(2)} !important`,
    paddingTop: `${theme.spacing(2)} !important`,
    position: "relative",
}));
