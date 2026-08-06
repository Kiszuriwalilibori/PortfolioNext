// import { addDoc, collection } from "firebase/firestore";
import { adminDb } from "@/fbase/admin";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/fbase/config";
import { Comment } from "@/types";
import { CommentsUtils } from "@/models/comments";

export async function addComment(request: NextRequest) {
    try {
        const decodedToken = await CommentsUtils.verifyUserToken(request);
        const comment: Comment = await request.json();
        CommentsUtils.validateCommentFields(comment, false);
        CommentsUtils.verifyCommentOwnership(comment.authorEmail, decodedToken.email);
        await CommentsUtils.hasRecentComment(db, comment);
        const docRef = await adminDb.collection("comments").add({
            author: comment.author,
            active: comment.active,
            content: comment.content,
            created: Date.now(),
            authorEmail: decodedToken.email,
            userId: decodedToken.uid,
            project: comment.project,
            projectID: comment.projectID,
        });

        CommentsUtils.revalidateProjectPath(comment.projectID);

        return NextResponse.json({ id: docRef.id }, { status: 200 });
    } catch (error: unknown) {
        return CommentsUtils.handleApiError(error);
    }
}
export default addComment;
