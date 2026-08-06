import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/fbase/admin";
import { CommentsUtils } from "@/models/comments";

export async function deleteComment(request: NextRequest) {
    try {
        const body = await request.json().catch(() => null);

        if (!body) {
            return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
        }

        const { commentId, projectID } = body;

        if (!commentId || !projectID) {
            return NextResponse.json(
                {
                    error: `${CommentsUtils.ERROR_MESSAGES.MISSING_REQUIRED_FIELDS}: commentId and projectID are required`,
                },
                { status: 400 }
            );
        }

        const decodedToken = await CommentsUtils.verifyUserToken(request);

        const commentRef = adminDb.collection("comments").doc(commentId);

        const commentDoc = await commentRef.get();

        if (!commentDoc.exists) {
            throw new Error(CommentsUtils.ERROR_MESSAGES.COMMENT_NOT_FOUND);
        }

        CommentsUtils.verifyCommentOwnershipByUid(commentDoc.data()?.userId, decodedToken.uid);

        await commentRef.delete();

        CommentsUtils.revalidateProjectPath(projectID);

        return NextResponse.json({ message: "Comment removed successfully" }, { status: 200 });
    } catch (error: unknown) {
        return CommentsUtils.handleApiError(error);
    }
}
