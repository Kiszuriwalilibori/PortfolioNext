import { SnackbarOrigin, useSnackbar } from "notistack";

interface MessageOptions {
    autoHideDuration?: number;
    anchorOrigin?: SnackbarOrigin;
    SnackbarProps?: React.HTMLAttributes<HTMLDivElement>;
    [key: string]: unknown;
}

export interface MessageMethods {
    info: (message: string, options?: MessageOptions) => void;
    error: (message: string, options?: MessageOptions) => void;
    success: (message: string, options?: MessageOptions) => void;
    warning: (message: string, options?: MessageOptions) => void;
}

export const useMessage = (): MessageMethods => {
    const { enqueueSnackbar } = useSnackbar();

    const showMessage: MessageMethods = {
        info: (message, options) =>
            enqueueSnackbar(message, {
                variant: "info",
                ...options,
                SnackbarProps: {
                    ...options?.SnackbarProps,
                    role: "status",
                    "aria-live": "polite",
                },
            }),

        error: (message, options) =>
            enqueueSnackbar(message, {
                variant: "error",
                ...options,
                SnackbarProps: {
                    ...options?.SnackbarProps,
                    role: "alert",
                    "aria-live": "assertive",
                },
            }),

        success: (message, options) =>
            enqueueSnackbar(message, {
                variant: "success",
                ...options,
                SnackbarProps: {
                    ...options?.SnackbarProps,
                    role: "status",
                    "aria-live": "polite",
                },
            }),

        warning: (message, options) =>
            enqueueSnackbar(message, {
                variant: "warning",
                ...options,
                SnackbarProps: {
                    ...options?.SnackbarProps,
                    role: "status",
                    "aria-live": "polite",
                },
            }),
    };

    return showMessage;
};

export default useMessage;
