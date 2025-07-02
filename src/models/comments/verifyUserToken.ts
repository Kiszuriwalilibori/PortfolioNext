import { getAuth } from "firebase-admin/auth";
import { getFirebaseAdminApp } from "@/fbase/admin-config";
import { NextRequest } from "next/server";

/**
 * Verifies the user token from the request headers
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
