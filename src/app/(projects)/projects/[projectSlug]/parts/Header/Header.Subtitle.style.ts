import { design } from "@/themes/design";
import type { SxProps } from "@mui/material/styles";

export const headerSubtitleSx: SxProps = {
    fontSize: "3.5rem",
    lineHeight: 1.285,
    fontWeight: 100,
    color: "common.white",
    textAlign: "center",
    fontFamily: "inherit",
    [`@media (max-width: ${design.breakpoints.values.md - 1}px)`]: {
        fontSize: "2.5rem",
    },
};
// todo: uwaga, kiedyś przez pomyłkę przeciekło tu Roboto i było lepiej, ale na razie nie filozujemy
