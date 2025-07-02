import { addDoc, collection, getFirestore, query, where, Firestore, getDocs } from "firebase/firestore";
import firebase_app from "@/fbase/config";
import { CommentType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

import { CommentsUtils } from "@/models/comments";

/**
 * Checks if the user has posted a comment on the same project within the last minute.
 * @param db - Firestore database instance
 * @param comment - The comment object to check
 * @returns {Promise<boolean>} - Returns true if a recent comment exists, false otherwise
 */
const FLOOD_LIMIT = 60000; // 1 minute in milliseconds
async function hasRecentComment(db: Firestore, comment: CommentType): Promise<boolean> {
    const oneMinuteAgo = Date.now() - FLOOD_LIMIT;
    const userCommentsQuery = query(collection(db, "comments"), where("projectID", "==", comment.projectID), where("authorEmail", "==", comment.authorEmail));
    const userCommentsSnapshot = await getDocs(userCommentsQuery);

    return userCommentsSnapshot.docs.some(doc => {
        const commentData = doc.data();
        return commentData.created > oneMinuteAgo;
    });
}

export async function POST(request: NextRequest) {
    try {
        const decodedToken = await CommentsUtils.verifyUserToken(request);
        const comment: CommentType = await request.json();
        if (comment.authorEmail !== decodedToken.email) {
            return NextResponse.json({ error: "You can only post comments with your own email" }, { status: 403 });
        }

        if (!comment.projectID || !comment.content || !comment.author || !comment.authorEmail) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const db = getFirestore(firebase_app);

        if (await hasRecentComment(db, comment)) {
            return NextResponse.json({ error: "Please wait at least 1 minute before posting another comment on this project" }, { status: 429 });
        }

        const docRef = await addDoc(collection(db, "comments"), {
            author: comment.author,
            active: comment.active,
            content: comment.content,
            created: Date.now(),
            authorEmail: comment.authorEmail,
            project: comment.project,
            projectID: comment.projectID,
        });

        CommentsUtils.revalidateProjectPath(comment.projectID);

        return NextResponse.json({ id: docRef.id }, { status: 200 });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        if (errorMessage.includes("Missing required fields")) {
            return NextResponse.json({ error: errorMessage }, { status: 400 });
        }
        if (errorMessage === "No token provided") {
            return NextResponse.json({ error: "Unauthorized: No token provided" }, { status: 401 });
        }
        if (errorMessage === "Token expired") {
            return NextResponse.json({ error: "Unauthorized: Token expired" }, { status: 401 });
        }
        if (errorMessage === "Invalid token") {
            return NextResponse.json({ error: "Unauthorized: Invalid token" }, { status: 401 });
        }
        if (errorMessage === "Token revoked") {
            return NextResponse.json({ error: "Unauthorized: Token revoked" }, { status: 401 });
        }
        if (errorMessage === "You can only post comments with your own email") {
            return NextResponse.json({ error: errorMessage }, { status: 403 });
        }
        return NextResponse.json({ error: `Failed to save comment: ${errorMessage}` }, { status: 500 });
    }
}
