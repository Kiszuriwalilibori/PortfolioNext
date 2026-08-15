"use client";
// import Button from "@mui/material/Button";

import { useCallback } from "react";

import Icons from "@icons";
import Modal from "@/components/modal";
import ActionButton from "@/components/common/ActionButton/ActionButton";
import { useCommentsMutation } from "@/hooks/useCommentsMutation";
import { useComment, useMessage, useSpeech } from "@/hooks";
import { MAX_LENGTH } from "@/models/comments/validateCommentFields";
import { Comment, Project, ModalProps } from "@/types";
import { validateAndSubmitComment } from "../AddComment/utils";
import { ButtonsStack, CharacterCounter, CommentTextField, MicrophoneButton, listeningMicrophoneSx } from "./Comments.style";
import LoadingIndicator from "@/components/LoadingIndicator";

interface Props extends Omit<ModalProps, "title"> {
    author: Comment["author"];
    project: Project["title"];
    authorEmail: Comment["authorEmail"];
    ID: Project["ID"];
    initialComment?: Comment["content"];
    commentId?: Comment["ID"];
    isEditing?: boolean;
}

const INITIAL_COMMENT = "" as Comment["content"];

export const CommentEditorDialog = (props: Props) => {
    const { isOpen, onClose, author, authorEmail, project, ID, initialComment = INITIAL_COMMENT, commentId, isEditing = false } = props;

    const { comment, createComment, clearComment } = useComment(initialComment);
    const { toggleListening, listening, isSpeechRecognitionSupported } = useSpeech(createComment);
    const { saveComment, isSubmitting } = useCommentsMutation({
        projectID: ID,
        isEditing,
        commentId,
    });

    const showMessage = useMessage();

    const handleError = useCallback(
        (message: string) => {
            showMessage.error("Error: " + message);
        },
        [showMessage]
    );

    const handleSuccess = useCallback(() => {
        showMessage.success(isEditing ? "Comment updated successfully!" : "Comment posted successfully!");
    }, [showMessage, isEditing]);

    const handleInvalidComment = useCallback(() => {
        showMessage.warning("Your comment was not published due to potentially toxic or abusive content.");
    }, [showMessage]);
    const handleSaveComment = useCallback(async () => {
        if (!comment.trim()) {
            handleError("Comment cannot be empty");
            return;
        }

        const commentData = {
            author,
            active: true,
            content: comment,
            authorEmail,
            project,
            projectID: ID,
            created: Date.now(),
        };

        try {
            await saveComment(commentData);

            handleSuccess();
            clearComment();
            onClose();
        } catch (error) {
            handleError(error instanceof Error ? error.message : "Unknown error");
        }
    }, [comment, author, authorEmail, project, ID, saveComment, clearComment, onClose, handleError, handleSuccess]);

    //     if (!comment.trim()) {
    //         handleError("Comment cannot be empty");
    //         return;
    //     }
    //     if (isSubmitting) {
    //         handleError("Comment is already being submitted");
    //         return;
    //     }
    //     setIsSubmitting(true);

    //     const commentData = {
    //         author,
    //         active: true,
    //         content: comment,
    //         authorEmail,
    //         project,
    //         projectID: ID,
    //         created: Date.now(),
    //         ...(isEditing && commentId ? { ID: commentId } : {}),
    //     };
    //     try {
    //         const auth = getAuth();
    //         const token = await auth.currentUser?.getIdToken();
    //         if (!token) {
    //             throw new Error("Failed to obtain authentication token");
    //         }
    //         const endpoint = "/api/comments";

    //         const response = await fetch(endpoint, {
    //             method: isEditing ? "PATCH" : "POST",
    //             headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    //             body: JSON.stringify(commentData),
    //         });

    //         if (!response.ok) {
    //             const { error } = await response.json();
    //             throw new Error(error || `Failed to ${isEditing ? "update" : "submit"} comment`);
    //         }

    //         await mutate(`/api/comments?projectID=${ID}`);
    //         handleSuccess();
    //         clearComment();
    //         onClose();
    //     } catch (error) {
    //         handleError(error instanceof Error ? error.message : "Unknown error");
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // }, [comment, author, authorEmail, project, ID, clearComment, onClose, handleError, handleSuccess, onCommentAdded, isEditing, commentId]);

    return (
        <Modal
            title={isEditing ? "Edit Comment" : "Add a Comment"}
            subtitle={"Your feedback is valuable and helps improve the content"}
            isOpen={isOpen}
            onClose={onClose}
            content={
                <>
                    <CommentTextField
                        id="comment-text-field"
                        label="Comment"
                        multiline
                        rows={8}
                        value={comment}
                        slotProps={{ htmlInput: { maxLength: MAX_LENGTH } }}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            createComment(event.target.value);
                        }}
                        aria-describedby="comment-error"
                    />
                    <CharacterCounter>
                        {comment.length}/{MAX_LENGTH}
                    </CharacterCounter>
                    {isSubmitting && <LoadingIndicator open centeredInParent prompt={isEditing ? "Updating..." : "Posting..."} size={80} />}
                </>
            }
            actions={
                <ButtonsStack direction="row" justifyContent="center" alignItems="center" spacing={2} id="Buttons stack">
                    <ActionButton variant="save" icon="/icons/save.svg" label={isEditing ? "Save" : "Post"} onClick={() => validateAndSubmitComment(comment, handleSaveComment, handleInvalidComment, showMessage)} disabled={comment === initialComment || isSubmitting} />
                    <ActionButton variant="cancel" icon="/icons/cancel.svg" label="Cancel" onClick={onClose} />
                    <MicrophoneButton onClick={toggleListening} disabled={!isSpeechRecognitionSupported} sx={listeningMicrophoneSx(listening)} aria-label={listening ? "Stop voice input" : "Start voice input"}>
                        {Icons.microphone}
                    </MicrophoneButton>
                </ButtonsStack>
            }
        />
    );
};

export default CommentEditorDialog;
