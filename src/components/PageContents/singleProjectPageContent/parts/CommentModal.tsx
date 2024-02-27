import uuid from "react-uuid";
import Button from "@mui/material/Button";

import { useCallback } from "react";

import Modal from "../../../modal";
import addComments from "fbase/firestore/addComments";

import { ModalProps, CommentType } from "types";
import { ButtonsStack, CommentTextField } from "../styled";
import { useComment } from "hooks";

interface Props extends Omit<ModalProps, "title"> {
    author: string;
    authorImage: string;
    project: string;
}

const INITIAL_COMMENT = "" as string;
export const CommentModal = (props: Props) => {
    const { isOpen, onClose, author, authorImage, project } = props;

    const { comment, createComment, clearComment } = useComment();

    const acceptComment = useCallback(async () => {
        const commentToBeStored: CommentType = {
            author,
            authorImage,
            active: true,
            content: comment,
            created: Date.now(),
            ID: uuid(),
            project,
        };
        addComments(commentToBeStored);
        try {
            const response = await fetch("/api/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(commentToBeStored),
            });
            if (response.ok) {
                console.log("New comment succesfully added");
            }
            if (!response.ok) throw new Error(`Error: ${response.status}`);
            const data = await response.json();
        } catch (e) {
            console.log("POST error: ", e);
        }

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

export default CommentModal;
