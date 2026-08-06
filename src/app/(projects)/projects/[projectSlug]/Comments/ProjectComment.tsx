import { formatDistanceToNow } from "date-fns";
import { Comment, Project } from "@/types";
import CommentActions from "./CommentActions";
import Gravatar from "./Gravatar";
import { Author, CommentBox, CommentDivider, CommentPaper, CommentTypography, SummaryStack, When } from "./Comments.style";
interface Props {
    comment: Comment;
    projectID: Project["ID"];
    projectTitle: Project["title"];
}
export const ProjectComment = (props: Props) => {
    const { comment, projectID, projectTitle } = props;

    return (
        <CommentPaper>
            <SummaryStack spacing={1} direction="row">
                <Gravatar authorEmail={comment.authorEmail} />
                <Author id="Author">{comment.author}</Author>
                <When id="When">
                    {formatDistanceToNow(new Date(comment.created), {
                        addSuffix: true,
                    })}
                </When>
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

export default ProjectComment;
