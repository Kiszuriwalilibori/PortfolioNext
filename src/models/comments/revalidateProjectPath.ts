import { revalidatePath } from "next/cache";

/**
 * Revalidates the project path for cache invalidation
 * @param projectID - The project ID to revalidate
 */
export function revalidateProjectPath(projectID: string) {
    const path = `/projects/${projectID}`;
    revalidatePath(path);
}
