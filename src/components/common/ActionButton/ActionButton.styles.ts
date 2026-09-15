import { SystemStyleObject, Theme } from "@mui/system";

import { ActionButtonVariant } from "./ActionButton";
import theme from "@/themes";

const ACTION_BUTTON_COLORS: Record<
    ActionButtonVariant,
    {
        background: string;
        hoverBackground: string;
        color?: string;
    }
> = {
    cancel: {
        background: theme.palette.secondary.main,
        hoverBackground: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText,
    },
    remove: {
        background: "error.main",
        hoverBackground: "error.dark",
    },
    save: {
        background: theme.palette.primary.dark,
        hoverBackground: theme.palette.primary.main,
        color: theme.palette.common.black,
    },
    logout: {
        background: "primary.main",
        hoverBackground: "primary.dark",
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
        height: "48px",
        padding: "5px",
        boxSizing: "border-box",

        border: "none",
        borderRadius: BORDER_RADIUS,

        backgroundColor: colors.background,
        color: colors.color,

        boxShadow: 4,

        textTransform: "none",

        "&:hover": {
            backgroundColor: colors.hoverBackground,
            boxShadow: 6,
        },

        "&:disabled": {
            cursor: "default",
            backgroundColor: "action.disabledBackground",
            color: "action.disabled",
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

    fontSize: "16px",
    fontFamily: "sans-serif",
    fontWeight: 700,
    lineHeight: 1,

    textTransform: "capitalize",
    textDecoration: "none",
};
