"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { useBoolean, useMessage } from "@/hooks";

import { useFirebaseAuth } from "@/contexts";

import { CommentInputModal } from "./CommentInputModal";
import Icons from "@icons";
import { CommentType, Project } from "@/types";

import { Actions, EditButton, RemoveButton } from "./Comments.style";

interface Props {
    commentId: CommentType["ID"];
    projectID: Project["ID"];
    projectTitle: Project["title"];
    commentContent: CommentType["content"];
    commentAuthorEmail: CommentType["authorEmail"];
}

const CommentActions = ({ commentId, commentAuthorEmail, projectID, projectTitle, commentContent }: Props) => {
    const { user, isLogged } = useFirebaseAuth();
    const [isRemoving, setIsRemoving] = useState(false);
    const [isModalOpen, openModal, closeModal] = useBoolean(false);
    const router = useRouter();
    const showMessage = useMessage();
    const isCommentAuthorLoggedIn = isLogged && user && user.email === commentAuthorEmail;

    const handleError = useCallback(
        (message: string) => {
            showMessage.error("Error: " + message);
            setIsRemoving(false);
        },
        [showMessage]
    );

    const handleSuccess = useCallback(() => {
        showMessage.success("Your comment has been removed");
        router.refresh();
        setIsRemoving(false);
    }, [showMessage, router]);

    const handleEditComment = useCallback(() => {
        openModal();
    }, [openModal]);

    const handleCommentUpdated = useCallback(() => {
        closeModal();
    }, [closeModal]);

    const handleRemoveComment = useCallback(async () => {
        if (isRemoving) {
            showMessage.warning("Comment is already being removed");
            return;
        }
        setIsRemoving(true);
        showMessage.info("Removing comment...");
        try {
            const response = await fetch(`/api/remove-comment`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ projectID, commentId }),
            });

            if (!response.ok) {
                const { error } = await response.json();
                throw new Error(error || "Failed to removed comment");
            }

            handleSuccess();
        } catch (error) {
            handleError(error instanceof Error ? error.message : "Unknown error");
        }
    }, [commentId, projectID, handleSuccess, handleError]);

    if (!isCommentAuthorLoggedIn) {
        return <Actions />;
    }

    return (
        <Actions id="Actions">
            <RemoveButton id="remove-button" aria-label="remove comment" onClick={handleRemoveComment}>
                {Icons.close}
            </RemoveButton>
            <EditButton id="edit-button" aria-label="edit comment" onClick={handleEditComment}>
                {Icons.edit}
            </EditButton>
            {isModalOpen && user && (
                <CommentInputModal isOpen={isModalOpen} onClose={closeModal} author={user.displayName || "Anonymous"} authorEmail={user.email || ""} project={projectTitle} ID={projectID} onCommentAdded={handleCommentUpdated} initialComment={commentContent} commentId={commentId} isEditing={true} />
            )}
        </Actions>
    );
};

export default CommentActions;
