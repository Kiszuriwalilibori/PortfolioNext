import { styled } from "@mui/system";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";

const StyledDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialog-paper": {
        padding: theme.spacing(4),
        maxWidth: "unset",
        minWidth: "600px",
        "@media (max-width:600px)": {
            minWidth: "90vw",
        },
    },
}));

const StyledDialogActions = styled(DialogActions)(() => ({
    padding: 0,
    paddingTop: 3,
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2, 0),
    gap: theme.spacing(2),
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    paddingX: 0,
    borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    right: theme.spacing(4),
    top: theme.spacing(4),
    color: theme.palette.error.main,
    width: "40px",
    height: "40px",
}));

const StyledTitleText = styled(Typography)(({ theme }) => ({
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: theme.spacing(3.5),
}));
const Subtitle = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16px",
    color: theme.palette.primary.lighterGrey,
    padding: theme.spacing(1.75, 0, 0.75, 0),
}));

export { StyledDialog as Dialog, StyledDialogActions as Actions, StyledDialogContent as Content, StyledIconButton as CloseButton, StyledDialogTitle as Title, StyledTitleText as TitleText, Subtitle };
