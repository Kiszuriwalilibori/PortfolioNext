"use client";

import IconButton from "@mui/material/IconButton";

import Icons from "@icons";
import { listeningMicrophoneSx, microphoneButtonSx } from "./MicrophoneButton.styles";

interface Props {
    onClick: () => void;
    disabled?: boolean;
    listening: boolean;
}

const MicrophoneButton = ({ onClick, disabled = false, listening }: Props) => {
    return (
        <IconButton
            onClick={onClick}
            disabled={disabled}
            sx={{
                ...microphoneButtonSx,
                ...listeningMicrophoneSx(listening),
            }}
            aria-label={listening ? "Stop voice input" : "Start voice input"}
        >
            {Icons.microphone}
        </IconButton>
    );
};

export default MicrophoneButton;
