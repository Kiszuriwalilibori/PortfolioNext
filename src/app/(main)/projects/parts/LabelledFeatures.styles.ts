import { SxProps, Theme } from "@mui/material";

export const createFeatureChipSx =
    (feature: string, selectedFeatures: string[]): SxProps<Theme> =>
    theme => ({
        cursor: "pointer",

        "&.Mui-focusVisible": { backgroundColor: selectedFeatures.includes(feature) ? theme.palette.active.main : theme.palette.secondary.main },

        ...(selectedFeatures.includes(feature) && {
            backgroundColor: theme.palette.active.main,
            color: theme.palette.active.contrastText,
            borderColor: theme.palette.active.dark,
        }),
    });
