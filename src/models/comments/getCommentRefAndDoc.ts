import { CommentType } from "@/types";
import { doc, Firestore, getDoc } from "firebase/firestore";

export async function getCommentRefAndDoc(db: Firestore, commentId: CommentType["ID"]) {
    const commentRef = doc(db, "comments", commentId);
    const commentDoc = await getDoc(commentRef);

    if (!commentDoc.exists()) {
        throw new Error(`Comment not found for ID: ${commentId}`);
    }

    return { commentRef, commentDoc };
}
