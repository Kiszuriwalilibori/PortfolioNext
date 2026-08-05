import { ERROR_MESSAGES } from "./errorConstants";

export function verifyCommentOwnershipByUid(commentUserId: string | undefined, currentUserId: string): void {
    if (!commentUserId) {
        throw new Error("This comment has no owner (legacy comment).");
    }

    if (commentUserId !== currentUserId) {
        throw new Error(`${ERROR_MESSAGES.FORBIDDEN_GENERAL}: ${ERROR_MESSAGES.FORBIDDEN_MODIFY_ONLY_OWN} modify your own comments`);
    }
}
