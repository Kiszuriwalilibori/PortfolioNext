"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { useCommentsMutation } from "@/hooks/useCommentsMutation";

import { useBoolean, useMessage } from "@/hooks";
import { useFirebaseAuth } from "@/contexts";
import { Comment, Project } from "@/types";
import Icons from "@icons";
import { Actions, EditButton, RemoveButton } from "./Comments.style";
import { CommentEditorDialog } from "./CommentEditorDialog";
import LoadingIndicator from "@/components/LoadingIndicator";

interface Props {
    comment: Comment;
    projectID: Project["ID"];
    projectTitle: Project["title"];
}

const CommentActions = ({ comment, projectID, projectTitle }: Props) => {
    const { user, isLogged } = useFirebaseAuth();
    const [isModalOpen, openModal, closeModal] = useBoolean(false);
    const [isConfirmOpen, openConfirm, closeConfirm] = useBoolean(false);
    const router = useRouter();
    const showMessage = useMessage();
    const { deleteComment, isSubmitting } = useCommentsMutation({
        projectID,
    });

    const isCommentAuthorLoggedIn = isLogged && user && user.uid === comment.userId;
    const handleError = useCallback(
        (message: string) => {
            showMessage.error("Error: " + message);

            closeConfirm();
        },
        [showMessage, closeConfirm]
    );

    const handleSuccess = useCallback(() => {
        showMessage.success("Your comment has been removed");
        closeConfirm();
    }, [showMessage, router, closeConfirm]);

    const handleEditComment = useCallback(() => {
        openModal();
    }, [openModal]);

    const handleRemoveComment = useCallback(() => {
        openConfirm();
    }, [openConfirm]);

    const handleConfirmRemove = useCallback(async () => {
        try {
            await deleteComment(comment.ID);

            handleSuccess();
        } catch (error) {
            handleError(error instanceof Error ? error.message : "Unknown error");
        }
    }, [comment.ID, deleteComment, handleSuccess, handleError]);
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
            {isModalOpen && user && <CommentEditorDialog isOpen={isModalOpen} onClose={closeModal} author={comment.author} authorEmail={comment.authorEmail} project={projectTitle} ID={projectID} initialComment={comment.content} commentId={comment.ID} isEditing={true} />}
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
                        <Button onClick={handleConfirmRemove} color="error" variant="contained" disabled={isSubmitting}>
                            Delete
                        </Button>
                        {isSubmitting && <LoadingIndicator open centeredInParent prompt="Deleting..." size={70} />}
                    </DialogActions>
                </Dialog>
            )}
        </Actions>
    );
};

export default CommentActions;

// todo cancel powinien też wychodzić z modala z zamknięciem
