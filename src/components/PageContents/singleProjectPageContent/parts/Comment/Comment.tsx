import moment from "moment";

import { Avatar, Box, Typography } from "@mui/material";
import { CommentType } from "types";
import { Author, CommentDivider, CommentPaper, SummaryStack, When } from "./Comment.style";

interface Props {
    comment: CommentType;
}
export const Comment = (props: Props) => {
    const { comment } = props;

    return (
        <CommentPaper>
            <SummaryStack spacing={1} direction="row">
                <Avatar id="Avatar" alt={comment.author} src={comment.authorImage} />
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
