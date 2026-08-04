import { NextRequest, NextResponse } from "next/server";

import { CommentsUtils } from "@/models/comments";
import addComment from "./addComment";
import { updateComment } from "./updateComment";
import { removeComment } from "./removeComment";

export async function GET(request: NextRequest) {
    const projectID = request.nextUrl.searchParams.get("projectID");

    if (!projectID) {
        return NextResponse.json({ error: "Missing projectID parameter" }, { status: 400 });
    }

    const { comments, error } = await CommentsUtils.get(projectID);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(comments);
}
export async function POST(request: NextRequest) {
    return addComment(request);
}
export async function PATCH(request: NextRequest) {
    return updateComment(request);
}
export async function DELETE(request: NextRequest) {
    return removeComment(request);
}
