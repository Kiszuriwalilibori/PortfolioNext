import moment from "moment";
import Gravatar from "./Gravatar";
import { Box, Typography } from "@mui/material";
import { CommentType } from "@/types";
import { Author, CommentDivider, CommentPaper, SummaryStack, When } from "./Comments.style";

import CommentActions from "./CommentActions";

interface Props {
    comment: CommentType;
    projectID: string;
    projectTitle: string;
}
export const Comment = (props: Props) => {
    const { comment, projectID, projectTitle } = props;

    return (
        <CommentPaper>
            <SummaryStack spacing={1} direction="row">
                <Gravatar authorEmail={comment.authorEmail} />
                <Author id="Author">{comment.author}</Author>
                <When id="When">{moment(comment.created).fromNow()}</When>
            </SummaryStack>
            <CommentDivider />
            <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
                <Typography
                    sx={{
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        hyphens: "auto",
                    }}
                >
                    {comment.content}
                </Typography>
            </Box>

            <CommentDivider />
            <CommentActions comment={comment} projectID={projectID} projectTitle={projectTitle} />
        </CommentPaper>
    );
};

export default Comment;
