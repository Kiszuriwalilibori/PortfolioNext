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
export const projectContainerSx: SxProps = {
    boxSizing: "content-box",
    maxWidth: 1200,
    marginLeft: "auto",
    marginRight: "auto",
    padding: "4vw 0",
};

export const projectScreenSx = (image: string): SxProps => ({
    position: "absolute",
    zIndex: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    backgroundImage: `url("${image}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    [`@media (max-width: ${design.breakpoints.values.md - 1}px)`]: {
        backgroundSize: "contain !important",
    },
});

export const headerSx: SxProps = {
    position: "relative",
    zIndex: 1,
    minHeight: 640,
    backgroundColor: "secondary.main",
    [`@media (min-width: 1500px)`]: {
        maxWidth: 1500,
        margin: "0 auto",
    },
};
