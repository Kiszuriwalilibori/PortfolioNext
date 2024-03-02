import Stack from "@mui/material/Stack";
import theme from "themes";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

export const SummaryStack = styled(Stack)(({ theme }) => ({
    alignItems: "center",
}));

export const Author = styled("h3")(({ theme }) => ({
    lineHeight: 1,
    fontSize: "clamp(12px, 3.125vw, 16px) !important",
    fontWeight: 700,
}));

export const When = styled("span")(({ theme }) => ({
    color: theme.palette.primary.dark,
    fontWeight: 500,
    fontStyle: "italic",
}));

export const CommentPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.grey[300],
    border: "2px solid grey",
    padding: theme.spacing(1),
}));

export const CommentDivider = styled(Divider)(({ theme }) => ({
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: theme.palette.grey[900],
    borderBottomWidth: 2,
}));

export const RemoveButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.error.main,
    width: "40px",
    height: "40px",
}));

export const Actions = styled(Stack)(({ theme }) => ({
    alignItems: "center",
}));
