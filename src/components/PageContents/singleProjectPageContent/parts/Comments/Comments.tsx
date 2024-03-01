import uuid from "react-uuid";

import Comment from "../Comment";

import { useSubscribeComments } from "hooks";
import { CommentsStack } from "./Comments.style";

interface Props {
    project: string;
}

export function Comments(props: Props) {
    const { project } = props;
    const { comments, loading, error } = useSubscribeComments(project);

    if (!comments) return null;

    return (
        <>
            <h2>Comments</h2>
            <CommentsStack spacing={1}>
                {comments.map(comment => {
                    return <Comment comment={comment as any} key={uuid()} />;
                })}
            </CommentsStack>
        </>
    );
}

export default Comments;
