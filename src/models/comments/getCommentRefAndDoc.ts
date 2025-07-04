import { Comment } from "@/types";
import { doc, Firestore, getDoc } from "firebase/firestore";
import { ERROR_MESSAGES } from "./errorConstants";

export async function getCommentRefAndDoc(db: Firestore, commentId: Comment["ID"]) {
    const commentRef = doc(db, "comments", commentId);
    const commentDoc = await getDoc(commentRef);

    if (!commentDoc.exists()) {
        throw new Error(`${ERROR_MESSAGES.COMMENT_NOT_FOUND} for ID: ${commentId}`);
    }

    return { commentRef, commentDoc };
}
