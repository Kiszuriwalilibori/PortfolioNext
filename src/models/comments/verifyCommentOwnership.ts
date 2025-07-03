/**
 * Verifies if the user is the owner of the comment.
 *
 * @param {string} authorEmail - The email of the comment's author.
 * @param {string} userEmail - The email of the user attempting to modify the comment.
 * @throws {Error} If the user is not the owner of the comment.
 */

export function verifyCommentOwnership(authorEmail: string, userEmail: string | undefined): void {
    if (!userEmail) {
        throw new Error("Unauthorized: User email is required");
    }
    if (userEmail !== authorEmail) {
        throw new Error("Forbidden: You can only modify your own comments");
    }
}
