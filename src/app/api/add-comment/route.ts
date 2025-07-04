import { addDoc, collection /*, getFirestore*/ } from "firebase/firestore";
import { /*firebase_app, */ db } from "@/fbase/config";
import { Comment } from "@/types";
import { NextRequest, NextResponse } from "next/server";

import { CommentsUtils } from "@/models/comments";

export async function POST(request: NextRequest) {
    try {
        const decodedToken = await CommentsUtils.verifyUserToken(request);
        const comment: Comment = await request.json();
        CommentsUtils.validateCommentFields(comment, false);
        CommentsUtils.verifyCommentOwnership(comment.authorEmail, decodedToken.email);
        await CommentsUtils.hasRecentComment(db, comment);

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
        return CommentsUtils.handleApiError(error);
    }
}
