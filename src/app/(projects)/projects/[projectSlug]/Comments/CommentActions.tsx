"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { getAuth } from "firebase/auth";

import { useBoolean, useMessage } from "@/hooks";
import { useFirebaseAuth } from "@/contexts";
import { Comment, Project } from "@/types";
import Icons from "@icons";
import { Actions, EditButton, RemoveButton } from "./Comments.style";
import { CommentInputModal } from "./CommentInputModal";

interface Props {
    comment: Comment;
    projectID: Project["ID"];
    projectTitle: Project["title"];
}

const CommentActions = ({ comment, projectID, projectTitle }: Props) => {
    const { user, isLogged } = useFirebaseAuth();
    const [isRemoving, setIsRemoving] = useState(false);
    const [isModalOpen, openModal, closeModal] = useBoolean(false);
    const [isConfirmOpen, openConfirm, closeConfirm] = useBoolean(false);
    const router = useRouter();
    const showMessage = useMessage();
    const isCommentAuthorLoggedIn = isLogged && user && user.email === comment.authorEmail;

    const handleError = useCallback(
        (message: string) => {
            showMessage.error("Error: " + message);
            setIsRemoving(false);
            closeConfirm();
        },
        [showMessage, closeConfirm]
    );

    const handleSuccess = useCallback(() => {
        showMessage.success("Your comment has been removed");
        router.refresh();
        setIsRemoving(false);
        closeConfirm();
    }, [showMessage, router, closeConfirm]);

    const handleEditComment = useCallback(() => {
        openModal();
    }, [openModal]);

    const handleCommentUpdated = useCallback(() => {
        closeModal();
    }, [closeModal]);

    const handleRemoveComment = useCallback(() => {
        openConfirm();
    }, [openConfirm]);

    const handleConfirmRemove = useCallback(async () => {
        if (isRemoving) return;
        setIsRemoving(true);
        showMessage.info("Removing comment...");
        try {
            const auth = getAuth();
            const token = await auth.currentUser?.getIdToken();
            if (!token) {
                throw new Error("Failed to obtain authentication token");
            }
            const response = await fetch(`/api/remove-comment`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify({ projectID, commentId: comment.ID }),
            });

            if (!response.ok) {
                const { error } = await response.json();
                throw new Error(error || "Failed to remove comment");
            }

            handleSuccess();
        } catch (error) {
            handleError(error instanceof Error ? error.message : "Unknown error");
        }
    }, [comment, projectID, handleSuccess, handleError, isRemoving, showMessage]);

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
                <CommentInputModal isOpen={isModalOpen} onClose={closeModal} author={comment.author} authorEmail={comment.authorEmail} project={projectTitle} ID={projectID} onCommentAdded={handleCommentUpdated} initialComment={comment.content} commentId={comment.ID} isEditing={true} />
            )}
            {isCommentAuthorLoggedIn && (
                <Dialog open={isConfirmOpen} onClose={closeConfirm} aria-labelledby="confirm-delete-dialog-title" aria-describedby="confirm-delete-dialog-description" disableScrollLock>
                    <DialogTitle id="confirm-delete-dialog-title">Confirm Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="confirm-delete-dialog-description">Are you sure you want to delete this comment? This action cannot be undone.</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeConfirm} color="info" variant="contained">
                            Cancel
                        </Button>
                        <Button onClick={handleConfirmRemove} color="error" variant="contained" disabled={isRemoving}>
                            {isRemoving ? "Deleting..." : "Delete"}
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Actions>
    );
};

export default CommentActions;
