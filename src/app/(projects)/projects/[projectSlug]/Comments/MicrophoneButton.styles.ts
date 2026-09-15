import theme from "@/themes/theme";

const INITIAL_COLOR = theme.palette.secondary.main;
const LISTENING_COLOR = "#ffb800";
const LISTENING_HOVER_COLOR = "#ffe37e";

const IDLE_HOVER_COLOR = "#ffe37e";

export const getMicrophoneButtonStyle = (listening: boolean, disabled = false): React.CSSProperties => {
    const backgroundColor = listening ? LISTENING_COLOR : INITIAL_COLOR;

    return {
        marginLeft: "4px",
        padding: "10px",
        width: "48px",
        height: "48px",
        border: "0",
        borderRadius: "50%",
        color: "#000",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        backgroundColor,
        opacity: disabled ? 0.3 : 1,
        cursor: disabled ? "default" : "pointer",
    };
};

export const microphoneButtonColors = {
    initial: INITIAL_COLOR,
    listening: LISTENING_COLOR,
    hover: IDLE_HOVER_COLOR,
    listeningHover: LISTENING_HOVER_COLOR,
};
