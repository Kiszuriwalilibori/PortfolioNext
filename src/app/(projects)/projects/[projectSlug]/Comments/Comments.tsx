import { Comment, Project } from "@/types";
import { CommentsUtils } from "@/models/comments";
import { ProjectComment } from "./ProjectComment";
import { CommentsStack } from "./Comments.style";

interface Props {
    projectID: Project["ID"];
    title: Project["title"];
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
            <CommentsStack spacing={1} id="comments-stack" role="list">
    {sortedComments.map((comment: Comment) => (
        <div role="listitem" key={comment.ID}>
            <ProjectComment comment={comment} projectID={projectID} projectTitle={title} />
        </div>
    ))}
</CommentsStack>
        </>
    );
}
