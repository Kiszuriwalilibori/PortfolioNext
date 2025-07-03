import moment from "moment";
import Gravatar from "./Gravatar";
import { CommentType } from "@/types";
import { Author, CommentBox, CommentDivider, CommentPaper, CommentTypography, SummaryStack, When } from "./Comments.style";

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
            <CommentBox>
                <CommentTypography>{comment.content}</CommentTypography>
            </CommentBox>

            <CommentDivider />
            <CommentActions comment={comment} projectID={projectID} projectTitle={projectTitle} />
        </CommentPaper>
    );
};

export default Comment;
