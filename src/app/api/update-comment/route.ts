import { doc, updateDoc, getFirestore } from "firebase/firestore";
import firebase_app from "@/fbase/config";
import { CommentType } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
    try {
        const comment: CommentType & { ID: string } = await request.json();

        if (!comment.ID || !comment.projectID || !comment.content || !comment.author || !comment.authorEmail) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
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
        return NextResponse.json({ error: `Failed to update comment: ${errorMessage}` }, { status: 500 });
    }
}
