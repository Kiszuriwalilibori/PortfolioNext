"use client";

import { useCallback } from "react";

import { useBoolean, useMessage } from "@/hooks";
import { requestLogin } from "@/fbase";
import { useFirebaseAuth } from "@/contexts";
import { CommentsButton } from "./Comment.style";
import { CommentInputModal } from "../AddComment/CommentInputModal";

interface Props {
    title: string;
    ID: string;
}

export const AddCommentsButton = (props: Props) => {
    const { title, ID } = props;
    const [isModalOpen, openModal, closeModal] = useBoolean(false);
    const { user, isLogged } = useFirebaseAuth();
    const showMessage = useMessage();

    const handleLeaveACommentClick = useCallback(() => {
        if (isLogged && user) {
            openModal();
        } else {
            requestLogin(
                () => openModal(),
                (error: string) => showMessage.error(`Login failed: ${error}`)
            );
        }
    }, [isLogged, user, openModal, showMessage]);

    return (
        <>
            <CommentsButton variant="contained" onClick={handleLeaveACommentClick} id="add comment button" aria-label="Leave a comment on the project">
                Leave a comment
            </CommentsButton>
            {isModalOpen && user && <CommentInputModal isOpen={isLogged} onClose={closeModal} author={user.displayName} authorEmail={user.email} project={title} ID={ID} />}
        </>
    );
};

export default AddCommentsButton;
