import { adminDb } from "@/fbase/admin";
import { Comment } from "@/types";
import { NextRequest, NextResponse } from "next/server";

import { CommentsUtils } from "@/models/comments";

export async function updateComment(request: NextRequest) {
    try {
        const comment: Comment & { ID: string } = await request.json();

        CommentsUtils.validateCommentFields(comment, true);

        const decodedToken = await CommentsUtils.verifyUserToken(request);

        const commentRef = adminDb.collection("comments").doc(comment.ID);

        const commentDoc = await commentRef.get();

        if (!commentDoc.exists) {
            throw new Error("Comment not found");
        }
        CommentsUtils.verifyCommentOwnershipByUid(commentDoc.data()?.userId, decodedToken.uid);
        await commentRef.update({
            content: comment.content,
        });

        CommentsUtils.revalidateProjectPath(comment.projectID);

        return NextResponse.json({ ID: comment.ID }, { status: 200 });
    } catch (error: unknown) {
        return CommentsUtils.handleApiError(error);
    }
}
