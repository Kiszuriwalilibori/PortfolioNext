"use client";

import Button from "@mui/material/Button";

import { useCallback } from "react";

import addComments from "@/fbase/firestore/addComments";

import Modal from "@/components/modal";
import { ModalProps, CommentType } from "@/types";
import { ButtonsStack, CommentTextField, MicrophoneButton, listeningMicrophoneSx } from "./CommentInputModal.style";
import { useComment, useMessage, useSpeech } from "@/hooks";

import { processComment } from "./utils";
import Icons from "@/components/common/icons";

interface Props extends Omit<ModalProps, "title"> {
    author: string;
    project: string;
    authorEmail: string;
    ID: string;
}

const INITIAL_COMMENT = "" as string;
export const CommentInputModal = (props: Props) => {
    const { isOpen, onClose, author, authorEmail, project, ID } = props;
    const { comment, createComment, clearComment } = useComment(INITIAL_COMMENT);
    const { toggleListening, listening, isSpeechRecognitionSupported } = useSpeech(createComment);
    const showMessage = useMessage();

    const handleError = useCallback((message: string) => {
        showMessage.error("Error: " + message);
    }, []);

    const handleSuccess = useCallback((message: string) => {}, []);

    const handleInvalidComment = () => {
        showMessage.warning("Your comment is invalid and will be not published  due to toxic or abusive content");
    };
    const sendComment = useCallback(async () => {
        const newCommentInfo: CommentType = {
            author,
            active: true,
            content: comment,
            created: Date.now(),
            authorEmail,
            ID: "",
            project,
            projectID: ID,
        };
        // addComments(commentToBeStored, handleSuccess, handleError);
        clearComment();
        console.log("Comment sent:", newCommentInfo);
        onClose();
    }, [comment]);
    return (
        <Modal
            title="Comment"
            subtitle="Type your comments in form below:"
            isOpen={isOpen}
            onClose={onClose}
            content={
                <CommentTextField
                    id="Comment text field"
                    label="Comment"
                    multiline
                    rows={8}
                    value={comment}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        createComment(event.target.value);
                    }}
                />
            }
            actions={
                <ButtonsStack direction="row" spacing={2} id="Buttons stack">
                    <Button disabled={comment === INITIAL_COMMENT} color="success" variant="contained" onClick={() => processComment(comment, sendComment, handleInvalidComment)} id="Log in button">
                        Accept
                    </Button>
                    <Button disabled={comment === INITIAL_COMMENT} variant="contained" color="warning" onClick={clearComment} id="Log out button">
                        Clear
                    </Button>
                    <MicrophoneButton sx={{ ...listeningMicrophoneSx(listening) }} className="with-tooltip" data-tooltip={"Switch microphone"} aria-label="Search by voice" disabled={!isSpeechRecognitionSupported} onClick={toggleListening}>
                        {Icons.microphone}
                    </MicrophoneButton>
                </ButtonsStack>
            }
        ></Modal>
    );
};

export default CommentInputModal;
