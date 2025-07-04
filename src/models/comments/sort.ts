import { Comment } from "@/types";

export function sort<K extends keyof Comment>(comments: Comment[], field: K = "created" as K): Comment[] {
    return [...comments].sort((a, b) => {
        const aValue = a[field];
        const bValue = b[field];

        // Handle number comparison
        if (typeof aValue === "number" && typeof bValue === "number") {
            return aValue - bValue;
        }

        // Handle string comparison
        if (typeof aValue === "string" && typeof bValue === "string") {
            return aValue.localeCompare(bValue);
        }

        // Handle date comparison (if Date objects)
        if (aValue instanceof Date && bValue instanceof Date) {
            return aValue.getTime() - bValue.getTime();
        }

        // Fallback: convert to string and compare
        return String(aValue).localeCompare(String(bValue));
    });
}

// This function sorts comments based on a specified field, defaulting to 'created'.
