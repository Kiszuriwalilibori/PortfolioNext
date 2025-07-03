import { CommentType } from "@/types";
import { Firestore, query, collection, where, getDocs } from "firebase/firestore";
import { ERROR_MESSAGES } from "./errorConstants";

/**
 * Checks if the user has posted a comment on the same project within the last minute.
 * @param db - Firestore database instance
 * @param comment - The comment object to check
 * @returns {Promise<boolean>} - Returns true if a recent comment exists, false otherwise
 */
const FLOOD_LIMIT = 60000; // 1 minute in milliseconds
export async function hasRecentComment(db: Firestore, comment: CommentType): Promise<void> {
    const oneMinuteAgo = Date.now() - FLOOD_LIMIT;
    const userCommentsQuery = query(collection(db, "comments"), where("projectID", "==", comment.projectID), where("authorEmail", "==", comment.authorEmail));
    const userCommentsSnapshot = await getDocs(userCommentsQuery);

    const hasRecentComment = userCommentsSnapshot.docs.some(doc => {
        const commentData = doc.data();
        return commentData.created > oneMinuteAgo;
    });
    if (hasRecentComment) {
        throw new Error(`${ERROR_MESSAGES.RATE_LIMIT_WAIT} before posting another comment on this project`);
    }
}
