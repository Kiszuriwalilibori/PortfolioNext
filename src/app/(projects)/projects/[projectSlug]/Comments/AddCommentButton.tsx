"use client";
import { useCallback } from "react";
import { useBoolean, useMessage } from "@/hooks";
import { useFirebaseAuth } from "@/contexts";
import { CommentEditorDialog } from "./CommentEditorDialog";
import { CommentsButton } from "./Comments.style";
import { Project } from "@/types";
import { requestLogin } from "@/fbase/auth";

interface Props {
    title: Project["title"];
    ID: Project["ID"];
}

export const AddCommentButton = (props: Props) => {
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
            <CommentsButton variant="contained" onClick={handleLeaveACommentClick} id="add-comment-button" aria-label="Leave a comment on the project">
                Leave a comment
            </CommentsButton>
            {isModalOpen && user && <CommentEditorDialog isOpen={isModalOpen} onClose={closeModal} author={user.displayName || "Anonymous"} authorEmail={user.email || ""} project={title} ID={ID} />}
        </>
    );
};

export default AddCommentButton;
