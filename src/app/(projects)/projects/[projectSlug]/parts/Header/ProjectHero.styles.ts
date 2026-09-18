import type { SxProps } from "@mui/material/styles";

import { design } from "@/themes/design";

export const projectHeroSx: SxProps = {
    position: "relative",
    zIndex: 1,
    margin: "200px auto 600px",
    textAlign: "center",
    color: "common.white",
    padding: "0 10px",
    fontFamily: "inherit",
    [`@media (max-width: ${design.breakpoints.values.md - 1}px)`]: {
        margin: "50px auto 250px",
    },
};
