import type { SxProps, Theme } from "@mui/material/styles";

export const accountButtonSx: SxProps<Theme> = {
    position: "fixed",
    top: 8,
    left: 8,
    width: 48,
    height: 48,
    zIndex: 1300,
};

export const gravatarStyle = {
    borderRadius: "50%",
    display: "block",
};
