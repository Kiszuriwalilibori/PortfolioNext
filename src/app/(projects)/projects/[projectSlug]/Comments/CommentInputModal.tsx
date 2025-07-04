"use client";
import Button from "@mui/material/Button";
import { getAuth } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Icons from "@icons";
import Modal from "@/components/modal";
import { useComment, useMessage, useSpeech } from "@/hooks";
import { MAX_LENGTH } from "@/models/comments/validateCommentFields";
import { Comment, Project, ModalProps } from "@/types";
import { validateAndSubmitComment } from "../AddComment/utils";
import { ButtonsStack, CharacterCounter, CommentTextField, MicrophoneButton, listeningMicrophoneSx } from "./Comments.style";

interface Props extends Omit<ModalProps, "title"> {
    author: Comment["author"];
    project: Project["title"];
    authorEmail: Comment["authorEmail"];
    ID: Project["ID"];
    initialComment?: Comment["content"];
    commentId?: Comment["ID"];
    isEditing?: boolean;

    onCommentAdded?: () => void;
}

const INITIAL_COMMENT = "" as Comment["content"];

export const CommentInputModal = (props: Props) => {
    const { isOpen, onClose, author, authorEmail, project, ID, initialComment = INITIAL_COMMENT, commentId, isEditing = false, onCommentAdded } = props;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { comment, createComment, clearComment } = useComment(initialComment);
    const { toggleListening, listening, isSpeechRecognitionSupported } = useSpeech(createComment);
    const router = useRouter();

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

    const sendComment = useCallback(async () => {
        if (!comment.trim()) {
            handleError("Comment cannot be empty");
            return;
        }
        if (isSubmitting) {
            handleError("Comment is already being submitted");
            return;
        }
        setIsSubmitting(true);

        const commentData = {
            author,
            active: true,
            content: comment,
            authorEmail,
            project,
            projectID: ID,
            created: Date.now(),
            ...(isEditing && commentId ? { ID: commentId } : {}),
        };
        try {
            const auth = getAuth();
            const token = await auth.currentUser?.getIdToken();
            if (!token) {
                throw new Error("Failed to obtain authentication token");
            }
            const endpoint = isEditing ? "/api/update-comment" : "/api/add-comment";
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(commentData),
            });

            if (!response.ok) {
                const { error } = await response.json();
                throw new Error(error || `Failed to ${isEditing ? "update" : "submit"} comment`);
            }

            if (onCommentAdded) {
                onCommentAdded();
            }

            handleSuccess();
            clearComment();
            onClose();
            router.refresh();
        } catch (error) {
            handleError(error instanceof Error ? error.message : "Unknown error");
        } finally {
            setIsSubmitting(false);
        }
    }, [comment, author, authorEmail, project, ID, clearComment, onClose, handleError, handleSuccess, onCommentAdded, isEditing, commentId, router]);

    useEffect(() => {
        if (isSubmitting) {
            showMessage.info(isEditing ? "Updating your comment..." : "Submitting your comment...");
        }
    }, [isSubmitting, showMessage, isEditing]);

    return (
        <Modal
            title={isEditing ? "Edit Comment" : "Comment"}
            subtitle={isEditing ? "Update your comment below:" : "Type your comments in form below:"}
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
                </>
            }
            actions={
                <ButtonsStack direction="row" spacing={2} id="Buttons stack">
                    <Button disabled={comment === initialComment || isSubmitting} color="success" variant="contained" onClick={() => validateAndSubmitComment(comment, sendComment, handleInvalidComment, showMessage)} id="accept-button">
                        {isEditing ? "Update" : "Accept"}
                    </Button>
                    <Button disabled={comment === INITIAL_COMMENT} variant="contained" color="warning" onClick={clearComment} id="clear-button">
                        Clear
                    </Button>
                    <MicrophoneButton sx={{ ...listeningMicrophoneSx(listening) }} className="with-tooltip" data-tooltip={"Switch microphone"} aria-label="Search by voice" disabled={!isSpeechRecognitionSupported} onClick={toggleListening}>
                        {Icons.microphone}
                    </MicrophoneButton>
                </ButtonsStack>
            }
        />
    );
};

export default CommentInputModal;
// Error: failed to update comment: Service account object must contain a string project_id
