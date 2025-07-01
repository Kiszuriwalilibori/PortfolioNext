import { doc, updateDoc, getFirestore } from "firebase/firestore";
import firebase_app from "@/fbase/config";
import { CommentType } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAuth } from "firebase-admin/auth";
import { getFirebaseAdminApp } from "@/fbase/admin-config";

export async function POST(request: NextRequest) {
    try {
        const comment: CommentType & { ID: string } = await request.json();

        if (!comment.ID || !comment.projectID || !comment.content || !comment.author || !comment.authorEmail) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const auth = getAuth(getFirebaseAdminApp());
        const token = request.headers.get("authorization")?.split("Bearer ")[1];
        if (!token) {
            return NextResponse.json({ error: "Unauthorized: No token provided" }, { status: 401 });
        }

        const decodedToken = await auth.verifyIdToken(token);

        if (decodedToken.email !== comment.authorEmail) {
            return NextResponse.json({ error: "Forbidden: You can only edit your own comments" }, { status: 403 });
        }

        const db = getFirestore(firebase_app);
        const commentRef = doc(db, "comments", comment.ID);

        await updateDoc(commentRef, {
            content: comment.content,
        });

        const path = `/projects/${comment.projectID}`;
        revalidatePath(path);

        return NextResponse.json({ ID: comment.ID }, { status: 200 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        if (errorMessage.includes("auth/id-token-expired")) {
            return NextResponse.json({ error: "Unauthorized: Token expired" }, { status: 401 });
        }
        return NextResponse.json({ error: `Failed to update comment: ${errorMessage}` }, { status: 500 });
    }
}
