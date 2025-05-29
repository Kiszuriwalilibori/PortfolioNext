"use client";

import { useCallback } from "react";

import { useBoolean } from "@/hooks";
import { requestLogin } from "@/fbase";
import { useFirebaseAuth } from "@/contexts";
import { CommentsButton } from "./Comment.style";

export const AddCommentsButton = () => {
    const [isModalOpen, openModal, closeModal] = useBoolean(false);
    const { user, isLogged } = useFirebaseAuth();

    const handleSuccess = () => {
        openModal();
    };

    const handleError = useCallback((message: string) => {
        // showMessage.error("Login attempt failure: " + message);

        console.log("Login attempt failure: " + message);
    }, []);
    const handleLeaveACommentClick = useCallback(() => {
        if (isLogged) {
            openModal();
        } else {
            requestLogin(handleSuccess, handleError);
        }
    }, [isLogged, handleError]);

    return (
        <CommentsButton variant="contained" onClick={handleLeaveACommentClick} id="add comment button">
            Leave a comment
        </CommentsButton>
    );
};

export default AddCommentsButton;
