import { getAuth } from "firebase-admin/auth";
import { getFirebaseAdminApp } from "@/fbase/admin-config";
import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import { CommentType } from "@/types";

/** * Verifies the user token from the request headers
 * @param request - The NextRequest object
 * @returns {Promise<any>} - Returns the decoded token
 * @throws {Error} - Throws error if token is invalid or missing
 */
export async function verifyUserToken(request: NextRequest) {
    const auth = getAuth(getFirebaseAdminApp());
    const token = request.headers.get("authorization")?.split("Bearer ")[1];

    if (!token) {
        throw new Error("No token provided");
    }

    try {
        return await auth.verifyIdToken(token);
    } catch (error) {
        if (error instanceof Error && error.message.includes("auth/id-token-expired")) {
            throw new Error("Token expired");
        }
        throw new Error("Invalid token");
    }
}

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

/**
 * Revalidates the project path for cache invalidation
 * @param projectID - The project ID to revalidate
 */
export function revalidateProjectPath(projectID: string) {
    const path = `/projects/${projectID}`;
    revalidatePath(path);
}
