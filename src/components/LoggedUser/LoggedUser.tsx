"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Gravatar from "react-gravatar";

import { useFirebaseAuth } from "@/contexts";
import { requestLogout } from "@/fbase/auth";

import { accountButtonSx, gravatarStyle } from "./LoggedUser.style";
import ActionButton from "../common/ActionButton/ActionButton";

export default function LoggedUser() {
    const { user, isLogged } = useFirebaseAuth();
    const [open, setOpen] = useState(false);

    if (!isLogged || !user) return null;

    const userName = user.displayName || user.email || "User";

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = async () => {
        handleClose();
        await requestLogout();
    };

    return (
        <>
            <IconButton aria-label={`Open account for ${userName}`} onClick={handleOpen} sx={accountButtonSx}>
                {user.email && <Gravatar email={user.email} size={40} style={gravatarStyle} />}
            </IconButton>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="user-account-dialog-title"
                slotProps={{
                    paper: {
                        sx: {
                            minWidth: 420,
                        },
                    },
                }}
            >
                <DialogTitle id="user-account-dialog-title">Account</DialogTitle>

                <DialogContent>
                    <Box
                        sx={{
                            textAlign: "center",
                            px: 3,
                            py: 2,
                        }}
                    >
                        {user.email && <Gravatar email={user.email} size={64} style={gravatarStyle} />}

                        <Typography variant="h6" sx={{ mt: 2 }}>
                            {userName}
                        </Typography>

                        {user.displayName && user.email && (
                            <Typography variant="body2" color="text.secondary">
                                {user.email}
                            </Typography>
                        )}
                    </Box>
                </DialogContent>

                <DialogActions
                    sx={{
                        justifyContent: "space-between",
                        gap: 2,
                        px: 3,
                        pb: 3,
                        pt: 2,
                        "& > :not(style) ~ :not(style)": {
                            marginLeft: 0,
                        },
                        "@media (max-width: 450px)": {
                            flexDirection: "column",
                            alignItems: "center",
                        },
                    }}
                >
                    <ActionButton variant="cancel" icon="/icons/cancel.svg" label="Cancel" onClick={handleClose} />

                    <ActionButton variant="logout" icon="/icons/log-out.svg" label="Log out" onClick={handleLogout} />
                </DialogActions>
            </Dialog>
        </>
    );
}
