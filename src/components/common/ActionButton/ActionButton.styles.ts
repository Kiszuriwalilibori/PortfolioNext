import { SystemStyleObject, Theme } from "@mui/system";

import { ActionButtonVariant } from "./ActionButton";

const ACTION_BUTTON_COLORS: Record<
    ActionButtonVariant,
    {
        background: string;
        hoverBackground: string;
    }
> = {
    cancel: {
        background: "grey.300",
        hoverBackground: "grey.400",
    },
    remove: {
        background: "error.main",
        hoverBackground: "error.dark",
    },
    save: {
        background: "success.light",
        hoverBackground: "success.main",
    },
};

const BORDER_RADIUS = "5px";

export const actionButtonSx = (variant: ActionButtonVariant): SystemStyleObject<Theme> => {
    const colors = ACTION_BUTTON_COLORS[variant];

    return {
        cursor: "pointer",

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

        width: "140px",
        minWidth: "140px",
        minHeight: "44px",

        padding: "5px",
        boxSizing: "border-box",

        border: "none",
        borderRadius: BORDER_RADIUS,

        backgroundColor: colors.background,

        boxShadow: 4,

        textTransform: "none",

        "&:hover": {
            backgroundColor: colors.hoverBackground,

            boxShadow: 6,
        },

        "&:disabled": {
            cursor: "default",
        },

        "&.Mui-focusVisible": {
            outline: "3px solid #036397",
            outlineOffset: "3px",
        },
    };
};

export const actionButtonLabelSx: SystemStyleObject<Theme> = {
    display: "inline",

    paddingLeft: "15px",

    color: "#000",

    fontSize: "16px",
    fontFamily: "sans-serif",
    fontWeight: 700,
    lineHeight: 1,

    textTransform: "capitalize",
    textDecoration: "none",
};
