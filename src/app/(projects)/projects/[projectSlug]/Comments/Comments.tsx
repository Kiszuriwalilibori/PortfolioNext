import { CommentsStack } from "./Comments.style";

import { CommentType } from "@/types";
import { Comment } from "./Comment";
import { CommentsUtils } from "@/models/comments";

interface Props {
    projectID: string;
    title: string;
}

export default async function Comments({ projectID, title }: Props) {
    const { comments, error } = await CommentsUtils.get(projectID);

    if (!comments || !comments.length) {
        return <p>No comments yet for project {title}.</p>;
    }

    const sortedComments = CommentsUtils.sort(comments);

    if (error) {
        return (
            <>
                <h3>Error Loading Comments for project {title}</h3>
                <p>{error.message}</p>
                {error.code && <p>Error Code: {error.code}</p>}
            </>
        );
    }

    return (
        <>
            <h2>Comments</h2>
            <CommentsStack spacing={1} id="comments-stack">
                {sortedComments.map((comment: CommentType) => (
                    <Comment comment={comment} key={comment.ID} projectID={projectID} projectTitle={title} />
                ))}
            </CommentsStack>
        </>
    );
}
