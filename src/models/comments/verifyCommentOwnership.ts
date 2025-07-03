/**
 * Verifies if the user is the owner of the comment.
 *
 * @param {string} authorEmail - The email of the comment's author.
 * @param {string} userEmail - The email of the user attempting to modify the comment.
 * @throws {Error} If the user is not the owner of the comment.
 */

import { ERROR_MESSAGES } from "./errorConstants";

export function verifyCommentOwnership(authorEmail: string, userEmail: string | undefined): void {
    if (!userEmail) {
        throw new Error(`Unauthorized: ${ERROR_MESSAGES.USER_EMAIL_REQUIRED}`);
    }

    if (userEmail !== authorEmail) {
        throw new Error(`${ERROR_MESSAGES.FORBIDDEN_GENERAL}: ${ERROR_MESSAGES.FORBIDDEN_MODIFY_ONLY_OWN} modify your own comments`);
    }
}
