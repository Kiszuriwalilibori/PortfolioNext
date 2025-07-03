import { CommentType } from "@/types";
import { ERROR_MESSAGES } from "./errorConstants";

export const MAX_LENGTH = 500; // Maximum length for comment content

/**
 * Validates required comment fields
 * @param comment - The comment object to validate
 * @param requireId - Whether ID field is required (for updates)
 * @throws {Error} - Throws error if required fields are missing
 */
export function validateCommentFields(comment: CommentType & { ID?: string }, requireId: boolean = false) {
    const requiredFields = ["projectID", "content", "author", "authorEmail"];
    if (requireId) requiredFields.push("ID");

    const missingFields = requiredFields.filter(field => !comment[field as keyof typeof comment]);
    if (missingFields.length > 0) {
        throw new Error(`${ERROR_MESSAGES.MISSING_REQUIRED_FIELDS}: ${missingFields.join(", ")}`);
    }

    if (comment.content && comment.content.length > MAX_LENGTH) {
        throw new Error(`${ERROR_MESSAGES.CONTENT_TOO_LONG} of ${MAX_LENGTH} characters`);
    }

    if (comment.content && comment.content.trim().length === 0) {
        throw new Error(ERROR_MESSAGES.CONTENT_EMPTY);
    }

    if (comment.author && comment.author.length > 100) {
        throw new Error(`${ERROR_MESSAGES.AUTHOR_NAME_TOO_LONG} of 100 characters`);
    }

    // Basic XSS prevention - reject script tags
    if (comment.content && /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(comment.content)) {
        throw new Error(ERROR_MESSAGES.INVALID_HTML);
    }
}
