import { addDoc, collection /*, getFirestore*/ } from "firebase/firestore";
import { /*firebase_app, */ db } from "@/fbase/config";
import { Comment } from "@/types";
import { NextRequest, NextResponse } from "next/server";

import { CommentsUtils } from "@/models/comments";

export async function POST(request: NextRequest) {
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
        const docRef = await addDoc(collection(db, "comments"), {
            author: comment.author,
            active: comment.active,
            content: comment.content,
            created: Date.now(),
            authorEmail: comment.authorEmail,
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
