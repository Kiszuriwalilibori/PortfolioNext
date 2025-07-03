import { NextResponse } from "next/server";

/**
 * Centralized error handling for API routes
 * @param error - The error object
 * @returns {NextResponse} - Formatted error response
 */
export function handleApiError(error: unknown): NextResponse {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";

    console.error("API Error:", errorMessage, error);

    if (errorMessage.includes("Missing required fields")) {
        return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
    if (errorMessage.includes("Please wait at least 1 minute")) {
        return NextResponse.json({ error: errorMessage }, { status: 429 });
    }
    if (
        errorMessage.includes("Invalid email format") ||
        errorMessage.includes("Comment content exceeds maximum length") ||
        errorMessage.includes("Comment content cannot be empty") ||
        errorMessage.includes("Author name exceeds maximum length") ||
        errorMessage.includes("Comment content contains invalid HTML")
    ) {
        return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
    if (errorMessage === "No token provided" || errorMessage === "Token expired" || errorMessage === "Invalid token" || errorMessage === "Token revoked" || errorMessage === "User email is required") {
        return NextResponse.json({ error: `Unauthorized: ${errorMessage}` }, { status: 401 });
    }
    if (errorMessage.includes("You can only") || errorMessage.includes("Forbidden")) {
        return NextResponse.json({ error: errorMessage }, { status: 403 });
    }
    if (errorMessage === "Comment not found") {
        return NextResponse.json({ error: errorMessage }, { status: 404 });
    }
    if (errorMessage === "Rate limit exceeded") {
        return NextResponse.json({ error: errorMessage }, { status: 429 });
    }

    return NextResponse.json({ error: `Server error: ${errorMessage}` }, { status: 500 });
}
