import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
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

export const gravatarStyle = { borderRadius: "50%", margin: "0 auto", display: "block", marginTop: "8px" };

export const LogOut = styled(Button)(({ theme }) => ({
    margin: "0 auto",
    display: "block",
    color: theme.palette.common.white,
    borderColor: "#00524C",
    backgroundColor: "#00524C",
    marginTop: theme.spacing(2),
}));

export const Name = styled("h2")((/*{ theme }*/) => ({
    fontSize: "1rem",
    fontWeight: "lighter",
}));
