import moment from "moment";

import { Avatar, Box, Typography } from "@mui/material";
import { CommentType } from "types";
import { Author, CommentDivider, CommentPaper, SummaryStack, When } from "./Comment.style";
import Gravatar from "react-gravatar";
interface Props {
    comment: CommentType;
}
export const Comment = (props: Props) => {
    const { comment } = props;

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
            <Box></Box>
        </CommentPaper>
    );
};

export default Comment;
