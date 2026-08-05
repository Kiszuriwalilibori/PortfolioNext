// import { addDoc, collection } from "firebase/firestore";
import { adminDb } from "@/fbase/admin";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/fbase/config";
import { Comment } from "@/types";
import { CommentsUtils } from "@/models/comments";

export async function addComment(request: NextRequest) {
    try {
        console.log("ADD COMMENT START");

        const decodedToken = await CommentsUtils.verifyUserToken(request);

        console.log("TOKEN OK", decodedToken.uid);

        const comment: Comment = await request.json();

        console.log("COMMENT BODY", comment);

        CommentsUtils.validateCommentFields(comment, false);

        CommentsUtils.verifyCommentOwnership(comment.authorEmail, decodedToken.email);

        await CommentsUtils.hasRecentComment(db, comment);

        console.log("decoded", decodedToken.uid);
        const docRef = await adminDb.collection("comments").add({
            // const docRef = await addDoc(collection(db, "comments"), {
            author: comment.author,
            active: comment.active,
            content: comment.content,
            created: Date.now(),
            authorEmail: decodedToken.email,
            // authorEmail: comment.authorEmail,
            userId: decodedToken.uid,
            project: comment.project,
            projectID: comment.projectID,
        });

        CommentsUtils.revalidateProjectPath(comment.projectID);

        console.log("docRef", docRef);

        return NextResponse.json({ id: docRef.id }, { status: 200 });
    } catch (error: unknown) {
        return CommentsUtils.handleApiError(error);
    }
}
export default addComment;
