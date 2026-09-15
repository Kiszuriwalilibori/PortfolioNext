"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { getMicrophoneButtonStyle } from "./MicrophoneButton.styles";

interface MicrophoneButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    listening: boolean;
    children: ReactNode;
}

export default function MicrophoneButton({ listening, children, ...props }: MicrophoneButtonProps) {
    return (
        <button type="button" {...props} style={getMicrophoneButtonStyle(listening, props.disabled)}>
            {children}
        </button>
    );
}
