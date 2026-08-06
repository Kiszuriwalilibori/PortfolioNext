import { adminDb } from "@/fbase/admin";
import { Comment } from "@/types";

interface FetchError {
    message: string;
    code?: string;
}

interface GetCommentsResult {
    comments: Comment[];
    error: FetchError | null;
}

export async function get(projectID: string): Promise<GetCommentsResult> {
    let comments: Comment[] = [];
    let error: FetchError | null = null;

    try {
        const querySnapshot = await adminDb.collection("comments").where("projectID", "==", projectID).get();

        comments = querySnapshot.docs.map(
            doc =>
                ({
                    ...doc.data(),
                    ID: doc.id,
                }) as Comment
        );
    } catch (err) {
        const firebaseError = err as { code?: string; message: string };

        error = {
            message: firebaseError.message || `Failed to fetch comments for project ${projectID}`,
            code: firebaseError.code,
        };
    }

    return { comments, error };
}
