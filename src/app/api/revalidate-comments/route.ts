import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { CommentsUtils } from "@/models/comments";

export async function POST(request: NextRequest) {
    try {
        // Verify user token to prevent unauthorized cache invalidation
        await CommentsUtils.verifyUserToken(request);

        const { searchParams } = new URL(request.url);
        const projectID = searchParams.get("projectID");

        if (!projectID) {
            return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
        }

        // Revalidate the specific project page
        revalidatePath(`/projects/${projectID}`);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: unknown) {
        return CommentsUtils.handleApiError(error);
    }
}
