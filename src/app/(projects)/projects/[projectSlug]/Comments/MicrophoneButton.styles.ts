import theme from "@/themes";

const COLOR_SUNNY_DARK = "#ffb800";
const COLOR_SUNNY_HOVER = "#ffe37e";

export const microphoneButtonSx = {
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
        backgroundColor: theme.palette.secondary.light,
    },
    color: theme.palette.secondary.contrastText,
    marginLeft: theme.spacing(0.5),
    padding: "10px",
    width: "48px",
    height: "48px",

    "@media(max-width: 430px)": {
        display: "none",
    },
    "&.Mui-disabled": {
        color: "action.disabled",
        backgroundColor: "action.backgroundColor",
    },
};

export const listeningMicrophoneSx = (listening: boolean) => {
    if (listening) {
        return {
            backgroundColor: COLOR_SUNNY_DARK,
            color: theme.palette.primary.contrastText,
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
    }

    return {};
};
