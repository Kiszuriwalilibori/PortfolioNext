"use client";

import { useCallback, useState } from "react";
import { getAuth } from "firebase/auth";
import { useSWRConfig } from "swr";

import { Comment } from "@/types";

interface Params {
    projectID: Comment["projectID"];
    isEditing?: boolean;
    commentId?: Comment["ID"];
}

export function useCommentsMutation({ projectID, isEditing = false, commentId }: Params) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { mutate } = useSWRConfig();

    const getAuthorizationHeaders = useCallback(async () => {
        const token = await getAuth().currentUser?.getIdToken();

        if (!token) {
            throw new Error("Failed to obtain authentication token");
        }

        return {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
    }, []);

    const saveComment = useCallback(
        async (commentData: Omit<Comment, "ID"> & { ID?: Comment["ID"] }) => {
            if (isSubmitting) {
                throw new Error("Comment is already being submitted");
            }

            setIsSubmitting(true);

            try {
                // const auth = getAuth();
                // const token = await auth.currentUser?.getIdToken();

                // if (!token) {
                //     throw new Error("Failed to obtain authentication token");
                // }

                const response = await fetch("/api/comments", {
                    method: isEditing ? "PATCH" : "POST",
                    // headers: {
                    //     "Content-Type": "application/json",
                    //     Authorization: `Bearer ${token}`,
                    // },
                    headers: await getAuthorizationHeaders(),
                    body: JSON.stringify({
                        ...commentData,
                        ...(isEditing && commentId ? { ID: commentId } : {}),
                    }),
                });

                if (!response.ok) {
                    const { error } = await response.json();
                    throw new Error(error || `Failed to ${isEditing ? "update" : "submit"} comment`);
                }

                await mutate(`/api/comments?projectID=${projectID}`);

                return true;
            } finally {
                setIsSubmitting(false);
            }
        },
        [commentId, isEditing, isSubmitting, mutate, projectID]
    );
    const deleteComment = useCallback(
        async (commentId: Comment["ID"]) => {
            if (isSubmitting) {
                throw new Error("Comment is already being submitted");
            }

            setIsSubmitting(true);

            try {
                const response = await fetch("/api/comments", {
                    method: "DELETE",
                    headers: await getAuthorizationHeaders(),
                    body: JSON.stringify({
                        projectID,
                        commentId,
                    }),
                });

                if (!response.ok) {
                    const { error } = await response.json();
                    throw new Error(error || "Failed to remove comment");
                }

                await mutate(`/api/comments?projectID=${projectID}`);
            } finally {
                setIsSubmitting(false);
            }
        },
        [isSubmitting, mutate, projectID]
    );

    return {
        saveComment,
        deleteComment,
        isSubmitting,
    };
}
