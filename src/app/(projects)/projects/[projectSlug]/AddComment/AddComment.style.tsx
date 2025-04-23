import { IconButton, Stack, TextField, styled } from "@mui/material";

const INITIAL_BTN_MIC_COLOR = "rgba(67, 84, 22, 0.4)";
const COLOR_SUNNY_DARK = "#ffb800";
const COLOR_SUNNY_HOVER = "#ffe37e";

export const CommentTextField = styled(TextField)(({ theme }) => ({
    marginTop: theme.spacing(3),
}));

export const ButtonsStack = styled(Stack)(({ theme }) => ({
    margin: "0 auto",
    width: "180px",
    marginTop: theme.spacing(3),
}));

export const MicrophoneButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: INITIAL_BTN_MIC_COLOR,
    marginLeft: theme.spacing(0.5),
    padding: "10px",
    width: "40px",
    height: "40px",
    color: theme.palette.common.black,
    "@media(max-width: 430px)": { display: "none" },
    "&.Mui-disabled": {
        opacity: 0.3,
    },
}));

export const listeningMicrophoneSx = (listening: boolean) => {
    if (listening) {
        return {
            backgroundColor: COLOR_SUNNY_DARK,
            animation: "bgr 1s infinite",
            "&:hover": {
                backgroundColor: COLOR_SUNNY_HOVER,
            },

            "@keyframes bgr": {
                "0%": {
                    backgroundColor: COLOR_SUNNY_DARK,
                },
                "50%": {
                    backgroundColor: COLOR_SUNNY_HOVER,
                },
                "100%": {
                    backgroundColor: COLOR_SUNNY_DARK,
                },
            },
        };
    } else {
        return {
            backgroundColor: INITIAL_BTN_MIC_COLOR,
            "&:hover": {
                backgroundColor: "lightgrey",
            },
        };
    }
};
