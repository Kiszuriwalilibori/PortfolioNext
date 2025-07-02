import { doc, updateDoc, getFirestore, getDoc } from "firebase/firestore";
import firebase_app from "@/fbase/config";
import { CommentType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

import { CommentsUtils } from "@/models/comments";

export async function POST(request: NextRequest) {
    try {
        const comment: CommentType & { ID: string } = await request.json();

        CommentsUtils.validateCommentFields(comment, true);

        const decodedToken = await CommentsUtils.verifyUserToken(request);

        if (decodedToken.email !== comment.authorEmail) {
            return NextResponse.json({ error: "Forbidden: You can only edit your own comments" }, { status: 403 });
        }

        const db = getFirestore(firebase_app);
        const commentRef = doc(db, "comments", comment.ID);

        const commentDoc = await getDoc(commentRef);
        if (!commentDoc.exists()) {
            return NextResponse.json({ error: "Comment not found" }, { status: 404 });
        }

        await updateDoc(commentRef, {
            content: comment.content,
        });

        CommentsUtils.revalidateProjectPath(comment.projectID);

        return NextResponse.json({ ID: comment.ID }, { status: 200 });
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
        if (errorMessage === "Forbidden: You can only modify your own comments") {
            return NextResponse.json({ error: errorMessage }, { status: 403 });
        }

        return NextResponse.json({ error: `Failed to update comment: ${errorMessage}` }, { status: 500 });
    }
}
