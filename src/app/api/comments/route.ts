import { NextResponse } from "next/server";
import addComments from "@/fbase/firestore/addComments";
import { CommentType } from "@/types";

export async function POST(request: Request) {
    try {
        const body: CommentType = await request.json();
        if (!body.content || !body.author || !body.authorEmail || !body.project || !body.projectID) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        await addComments(
            body,
            () => {},
            (error: string) => {
                throw new Error(error);
            }
        );

        return NextResponse.json({ message: "Comment added successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Server error" }, { status: 500 });
    }
}
