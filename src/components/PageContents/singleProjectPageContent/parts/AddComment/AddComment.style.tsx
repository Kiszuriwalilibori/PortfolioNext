import { Stack, TextField, styled } from "@mui/material";

export const CommentTextField = styled(TextField)(({ theme }) => ({
    marginTop: theme.spacing(3),
}));

export const ButtonsStack = styled(Stack)(({ theme }) => ({
    margin: "0 auto",
    width: "180px",
    marginTop: theme.spacing(3),
}));
