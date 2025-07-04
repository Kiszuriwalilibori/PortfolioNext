import { updateDoc /*, getFirestore*/ } from "firebase/firestore";
import { /*firebase_app,*/ db } from "@/fbase/config";
import { Comment } from "@/types";
import { NextRequest, NextResponse } from "next/server";

import { CommentsUtils } from "@/models/comments";

export async function POST(request: NextRequest) {
    try {
        const comment: Comment & { ID: string } = await request.json();
        CommentsUtils.validateCommentFields(comment, true);
        const decodedToken = await CommentsUtils.verifyUserToken(request);
        CommentsUtils.verifyCommentOwnership(comment.authorEmail, decodedToken.email);

        // const db = getFirestore(firebase_app);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { commentRef, commentDoc } = await CommentsUtils.getCommentRefAndDoc(db, comment.ID);
        await updateDoc(commentRef, {
            content: comment.content,
        });

        CommentsUtils.revalidateProjectPath(comment.projectID);

        return NextResponse.json({ ID: comment.ID }, { status: 200 });
    } catch (error: unknown) {
        return CommentsUtils.handleApiError(error);
    }
}
