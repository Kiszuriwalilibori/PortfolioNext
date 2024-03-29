import moment from "moment";
import Gravatar from "react-gravatar";
import removeComment from "fbase/firestore/removeComment";

import { MouseEventHandler, useCallback } from "react";

import { Box, Typography } from "@mui/material";
import { CommentType } from "types";
import { Actions, Author, CommentDivider, CommentPaper, RemoveButton, SummaryStack, When } from "./Comment.style";

import { useAuthContext } from "contexts";
import { Icons } from "components/common";
import { useMessage } from "hooks";

interface Props {
    comment: CommentType;
}
export const Comment = (props: Props) => {
    const { comment } = props;
    const { user, isLogged } = useAuthContext();
    const showMessage = useMessage();

    const handleError = useCallback((message: string) => {
        showMessage.error("Error: " + message);
    }, []);

    const handleSuccess = useCallback(() => {
        showMessage.success("Your comment has been removed");
    }, []);

    const handleRemoveComment = useCallback(() => {
        removeComment(comment.ID, handleSuccess, handleError);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comment.ID]);

    return (
        <CommentPaper>
            <SummaryStack spacing={1} direction="row">
                {comment.authorEmail && (
                    <Gravatar email={comment.authorEmail} size={40} style={{ borderRadius: "50%" }} />
                )}
                <Author id="Author">{comment.author}</Author>
                <When id="When">{moment(comment.created).fromNow()}</When>
            </SummaryStack>
            <CommentDivider />
            <Box>
                <Typography>{comment.content}</Typography>
            </Box>

            <CommentDivider />
            <Actions>
                {isLogged && user && user.displayName === comment.author && (
                    <RemoveButton
                        aria-label="remove comment"
                        onClick={() => {
                            handleRemoveComment();
                        }}
                    >
                        {Icons.close}
                    </RemoveButton>
                )}
            </Actions>
        </CommentPaper>
    );
};

export default Comment;
