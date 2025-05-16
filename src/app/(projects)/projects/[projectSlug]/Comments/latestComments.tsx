import uuid from "react-uuid";

import Comment from "../Comment";

import { getComments } from "./getComments";
import { CommentType } from "@/types";
import { CommentsStack } from "./Comments.style";

interface Props {
    projectID: string;
    title: string;
}

export default async function Comments({ projectID, title }: Props) {
    const { comments, error } = await getComments(projectID);

    if (error) {
        return (
            <>
                <h3>Error Loading Comments for project {title}</h3>
                <p>{error.message}</p>
                {error.code && <p>Error Code: {error.code}</p>}
            </>
        );
    }

    if (!comments || !comments.length) {
        return <p>No comments yet for project {title}.</p>;
    }

    return (
        <>
            <h2>Comments</h2>
            <CommentsStack spacing={1}>
                {comments.map((comment: CommentType) => (
                    <Comment comment={comment} key={uuid()} />
                ))}
            </CommentsStack>
        </>
    );
}
