import { NextResponse } from "next/server";
import { ERROR_MESSAGES } from "./errorConstants";

/**
 * Centralized error handling for API routes
 * @param error - The error object
 * @returns {NextResponse} - Formatted error response
 */
export function handleApiError(error: unknown): NextResponse {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";

    console.error("API Error:", errorMessage, error);

    if (errorMessage.includes(ERROR_MESSAGES.MISSING_REQUIRED_FIELDS)) {
        return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
    if (errorMessage.includes(ERROR_MESSAGES.RATE_LIMIT_WAIT)) {
        return NextResponse.json({ error: errorMessage }, { status: 429 });
    }
    if (errorMessage.includes(ERROR_MESSAGES.INVALID_EMAIL_FORMAT) || errorMessage.includes(ERROR_MESSAGES.CONTENT_TOO_LONG) || errorMessage.includes(ERROR_MESSAGES.CONTENT_EMPTY) || errorMessage.includes(ERROR_MESSAGES.AUTHOR_NAME_TOO_LONG) || errorMessage.includes(ERROR_MESSAGES.INVALID_HTML)) {
        return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
    if (errorMessage === ERROR_MESSAGES.NO_TOKEN_PROVIDED || errorMessage === ERROR_MESSAGES.TOKEN_EXPIRED || errorMessage === ERROR_MESSAGES.INVALID_TOKEN || errorMessage === ERROR_MESSAGES.TOKEN_REVOKED || errorMessage === ERROR_MESSAGES.USER_EMAIL_REQUIRED) {
        return NextResponse.json({ error: `Unauthorized: ${errorMessage}` }, { status: 401 });
    }
    if (errorMessage.includes(ERROR_MESSAGES.FORBIDDEN_MODIFY_ONLY_OWN) || errorMessage.includes(ERROR_MESSAGES.FORBIDDEN_GENERAL)) {
        return NextResponse.json({ error: errorMessage }, { status: 403 });
    }
    if (errorMessage === ERROR_MESSAGES.COMMENT_NOT_FOUND) {
        return NextResponse.json({ error: errorMessage }, { status: 404 });
    }
    if (errorMessage === ERROR_MESSAGES.RATE_LIMIT_EXCEEDED) {
        return NextResponse.json({ error: errorMessage }, { status: 429 });
    }

    return NextResponse.json({ error: `Server error: ${errorMessage}` }, { status: 500 });
}
