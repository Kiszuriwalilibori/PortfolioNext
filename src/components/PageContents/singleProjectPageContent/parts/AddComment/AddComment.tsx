import Button from "@mui/material/Button";

import { useCallback } from "react";

import Modal from "../../../../modal";
import addComments from "fbase/firestore/addComments";

import { ModalProps, CommentType } from "types";
import { ButtonsStack, CommentTextField } from "./AddComment.style";
import { useComment, useMessage } from "hooks";

interface Props extends Omit<ModalProps, "title"> {
    author: string;
    // authorImage: string;
    project: string;
    authorEmail: string;
}

const INITIAL_COMMENT = "" as string;
export const AddComment = (props: Props) => {
    const { isOpen, onClose, author, authorEmail, project } = props;

    const { comment, createComment, clearComment } = useComment();

    const showMessage = useMessage();

    const handleError = useCallback((message: string) => {
        showMessage.error("Error: " + message);
    }, []);

    const handleSuccess = useCallback((message: string) => {
        showMessage.success("Your comment has been successfully added");
    }, []);

    const acceptComment = useCallback(async () => {
        const commentToBeStored: CommentType = {
            author,
            active: true,
            content: comment,
            created: Date.now(),
            authorEmail,
            ID: "",
            project,
        };
        addComments(
            `${commentToBeStored.author} ${commentToBeStored.project} ${commentToBeStored.created}`,
            commentToBeStored,
            handleSuccess,
            handleError
        );
        clearComment();
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
                    <Button
                        disabled={comment === INITIAL_COMMENT}
                        color="success"
                        variant="contained"
                        onClick={acceptComment}
                        id="Log in button"
                    >
                        Accept
                    </Button>
                    <Button
                        disabled={comment === INITIAL_COMMENT}
                        variant="contained"
                        color="warning"
                        onClick={clearComment}
                        id="Log out button"
                    >
                        Clear
                    </Button>
                </ButtonsStack>
            }
        ></Modal>
    );
};

export default AddComment;
