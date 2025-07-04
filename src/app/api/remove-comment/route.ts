import { NextRequest, NextResponse } from "next/server";
import { deleteDoc /*, getFirestore*/ } from "firebase/firestore";

import { /*firebase_app,*/ db } from "@/fbase/config";
import { CommentsUtils } from "@/models/comments";

export async function DELETE(request: NextRequest) {
    try {
        const body = await request.json().catch(() => null);

        if (!body) {
            return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
        }

        const { commentId, projectID } = body;

        if (!commentId || !projectID) {
            return NextResponse.json({ error: `${CommentsUtils.ERROR_MESSAGES.MISSING_REQUIRED_FIELDS}: commentId and projectID are required` }, { status: 400 });
        }

        const decodedToken = await CommentsUtils.verifyUserToken(request);

        // const db = getFirestore(firebase_app);

        const { commentRef, commentDoc } = await CommentsUtils.getCommentRefAndDoc(db, commentId);
        const commentData = commentDoc.data();
        console.log(commentData, decodedToken.email);
        CommentsUtils.verifyCommentOwnership(commentData.authorEmail, decodedToken.email);

        await deleteDoc(commentRef);

        CommentsUtils.revalidateProjectPath(projectID);
        return NextResponse.json({ message: "Comment removed successfully" }, { status: 200 });
    } catch (error: unknown) {
        return CommentsUtils.handleApiError(error);
    }
}
