import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import firebase_app from "@/fbase/config";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAuth } from "firebase-admin/auth";
import { getFirebaseAdminApp } from "@/fbase/admin-config";
import { getDoc } from "firebase/firestore";
import { verifyUserToken, revalidateProjectPath } from "@/lib/comment-utils";

export async function DELETE(request: NextRequest) {
    try {
        const body = await request.json().catch(() => null);

        if (!body) {
            return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
        }

        const { commentId, projectID } = body;

        if (!commentId || !projectID) {
            return NextResponse.json({ error: "Missing required fields: commentId and projectID are required" }, { status: 400 });
        }
        // const auth = getAuth(getFirebaseAdminApp());
        // const token = request.headers.get("authorization")?.split("Bearer ")[1];
        // if (!token) {
        //     return NextResponse.json({ error: "Unauthorized: No token provided" }, { status: 401 });
        // }

        // const decodedToken = await auth.verifyIdToken(token);

        const decodedToken = await verifyUserToken(request);

        const db = getFirestore(firebase_app);
        const commentRef = doc(db, "comments", commentId);
        const commentDoc = await getDoc(commentRef);
        if (!commentDoc.exists()) {
            return NextResponse.json({ error: "Comment not found" }, { status: 404 });
        }
        const commentData = commentDoc.data();
        if (decodedToken.email !== commentData.authorEmail) {
            return NextResponse.json({ error: "Forbidden: You can only delete your own comments" }, { status: 403 });
        }

        await deleteDoc(commentRef);

        // const path = `/projects/${projectID}`;
        // revalidatePath(path);
        revalidateProjectPath(projectID);
        return NextResponse.json({ message: "Comment removed successfully" }, { status: 200 });
    } catch (error: any) {
        if (error.message === "No token provided") {
            return NextResponse.json({ error: "Unauthorized: No token provided" }, { status: 401 });
        }
        if (error.message === "Token expired") {
            return NextResponse.json({ error: "Unauthorized: Token expired" }, { status: 401 });
        }
        if (error.message === "Invalid token") {
            return NextResponse.json({ error: "Unauthorized: Invalid token" }, { status: 401 });
        }
        if (error.message === "Forbidden: You can only modify your own comments") {
            return NextResponse.json({ error: error.message }, { status: 403 });
        }
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";

        // if (errorMessage.includes("auth/id-token-expired")) {
        //     return NextResponse.json({ error: "Unauthorized: Token expired" }, { status: 401 });
        // }
        if (errorMessage.includes("Service account object must contain a string project_id")) {
            return NextResponse.json({ error: "Server configuration error: Invalid service account" }, { status: 500 });
        }

        return NextResponse.json({ error: `Failed to remove comment: ${errorMessage}` }, { status: 500 });
    }
}
