import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/system";

export const UserCard = styled(Card)(({ theme }) => ({
    maxWidth: 300,
    position: "fixed",
    left: "1vw",
    top: "1vw",
    backgroundColor: theme.palette.common.white,
    color: "#00524C",
    border: "2px solid black",
    cursor: "default !important",
    zIndex: "3000",
}));

export const Media = styled(CardMedia)(({ theme }) => ({
    height: 40,
    width: 40,
    margin: "12px auto 0 auto",
    backgroundSize: "contain",
    color: theme.palette.primary.main,
}));

export const LogOut = styled(Button)(({ theme }) => ({
    margin: "0 auto",
    display: "block",
    color: "#00524C",
    borderColor: "#00524C",
    marginTop: theme.spacing(2),
}));

export const Name = styled("h2")(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: "lighter",
}));
