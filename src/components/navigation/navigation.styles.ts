import { SystemStyleObject, Theme } from "@mui/system";

const GOLD = "#ffd700";
const BOX_SHADOW_BASIC = "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,0.12)";
const BORDER_RADIUS = "5px";

export const navigationSx: SystemStyleObject<Theme> = {
    position: "fixed",
    display: "block",
    top: 56,
    right: -100,
    textAlign: "left",
    zIndex: 9999,
    paddingTop: "6px",
};

export const navigationListSx: SystemStyleObject<Theme> = {
    listStyleType: "none",

    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(4, 1fr)",

    gap: "6px 0",

    padding: 0,
    margin: 0,
};

export const navigationItemSx: SystemStyleObject<Theme> = {
    listStyleType: "none",
    position: "relative",
    right: 0,
    transition: "right 0.5s ease-out 0s",

    "&:hover": {
        right: 90,
    },
};

export const navigationButtonSx = (isActive: boolean): SystemStyleObject<Theme> => ({
    cursor: "pointer",

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    width: "140px",
    height: "40px",
    minWidth: "unset",

    padding: "5px",
    boxSizing: "initial",

    border: "none",
    borderRadius: BORDER_RADIUS,

    backgroundColor: isActive ? GOLD : "primary.dark",

    boxShadow: BOX_SHADOW_BASIC,

    textTransform: "none",

    "&:hover": {
        backgroundColor: isActive ? GOLD : "primary.dark",
        boxShadow: BOX_SHADOW_BASIC,
    },

    "&:disabled": {
        cursor: "default",
    },

    "&:focus-visible": {
        outline: "2px solid #036397",
        outlineOffset: "2px",
    },

    "&.Mui-focusVisible": {
        outline: "3px solid #036397",
        outlineOffset: "3px",
    },
});

export const navigationLabelSx = (isActive: boolean): SystemStyleObject<Theme> => ({
    display: "inline",
    paddingLeft: "15px",
    color: isActive ? "#000" : "#fff",
    fontSize: "16px",
    fontFamily: "sans-serif",
    fontWeight: 700,
    lineHeight: 1,

    textTransform: "capitalize",
    textDecoration: "none",
});

export const navigationTogglerSx: SystemStyleObject<Theme> = {
    position: "fixed",
    top: 0,
    right: 0,
    width: 48,
    height: 48,
    p: "5px",
    margin: "6px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    bgcolor: "primary.dark",

    borderRadius: `${BORDER_RADIUS} 0 0 ${BORDER_RADIUS}`,

    boxShadow: BOX_SHADOW_BASIC,

    zIndex: 1000,

    "&:hover": {
        bgcolor: "primary.dark",
    },

    "&:focus-visible": {
        outline: "3px solid #036397",
        outlineOffset: 2,
    },

    "&.Mui-focusVisible": {
        outline: "3px solid #036397",
        outlineOffset: "2px",
    },
};
