import { CommentType } from "@/types";

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
        throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
    }
}
