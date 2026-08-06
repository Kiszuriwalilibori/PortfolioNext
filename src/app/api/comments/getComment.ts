import { NextRequest, NextResponse } from "next/server";

import { adminDb } from "@/fbase/admin";
import { CommentsUtils } from "@/models/comments";
import { Comment } from "@/types";

export async function getComment(request: NextRequest) {
    try {
        const projectID = request.nextUrl.searchParams.get("projectID");

        if (!projectID) {
            return NextResponse.json({ error: "Missing projectID parameter" }, { status: 400 });
        }

        const snapshot = await adminDb.collection("comments").where("projectID", "==", projectID).get();

        const comments = snapshot.docs.map(
            doc =>
                ({
                    ...doc.data(),
                    ID: doc.id,
                }) as Comment
        );

        return NextResponse.json(comments);
    } catch (error: unknown) {
        return CommentsUtils.handleApiError(error);
    }
}
