import { getDocs, collection, query, where } from "firebase/firestore";
import uuid from "react-uuid";

import { CommentType } from "@/types";
import { db } from "@/fbase/config";
import { CommentsStack } from "./Comments.style";

import Comment from "../Comment";

interface CommentsListProps {
    projectID: string;
    title: string;
}
interface FetchError {
    message: string;
    code?: string;
}

export default async function Comments({ projectID, title }: CommentsListProps) {
    let comments: CommentType[] = [];
    let error: FetchError | null = null;

    try {
        const commentsQuery = query(collection(db, "comments"), where("projectID", "==", projectID));

        const querySnapshot = await getDocs(commentsQuery);

        comments = querySnapshot.docs.map(
            doc =>
                ({
                    ID: doc.id,
                    ...doc.data(),
                } as CommentType)
        );
    } catch (err) {
        const firebaseError = err as { code?: string; message: string };

        error = {
            message: firebaseError.message || `Failed to fetch comments for project ${projectID}`,
            code: firebaseError.code,
        };
    }

    if (!comments || !comments.length) return <p>No comments yet for project {title}.</p>;
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
            <CommentsStack spacing={1}>
                {comments.map(comment => {
                    return <Comment comment={comment as any} key={uuid()} />;
                })}
            </CommentsStack>
        </>
    );
}
