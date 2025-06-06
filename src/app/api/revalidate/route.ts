import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { path } = await request.json();
        if (!path) {
            return NextResponse.json({ error: "Path is required" }, { status: 400 });
        }

        revalidatePath(path);
        return NextResponse.json({ message: `Revalidated path: ${path}` });
    } catch (error) {
        return NextResponse.json({ error: "Failed to revalidate path" }, { status: 500 });
    }
}
