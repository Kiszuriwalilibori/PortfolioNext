"use client";
import useSWR from "swr";

import { Comment, Project } from "@/types";
import { ProjectComment } from "./ProjectComment";
import { CommentsStack } from "./Comments.style";
import LoadingIndicator from "@/components/LoadingIndicator";
import { useDelayedCondition } from "@/hooks/useDelayedCondition";
import CommentsEmptyState from "./CommentEmptyState";

interface Props {
    projectID: Project["ID"];
    title: Project["title"];
}

const fetcher = (url: string) =>
    fetch(url).then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch comments");
        }

        return response.json();
    });

export default function Comments({ projectID, title }: Props) {
    const { data: comments = [], error, isLoading } = useSWR<Comment[]>(`/api/comments?projectID=${projectID}`, fetcher);
    const showLoading = useDelayedCondition(isLoading);

    if (error) {
        return (
            <>
                <h3>Error Loading Comments for project {title}</h3>
                <p>{error.message}</p>
            </>
        );
    }

    if (showLoading) {
        return <LoadingIndicator prompt="Loading comments..." />;
    }

    if (!comments.length) {
        return <CommentsEmptyState />;
    }

    const sortedComments = [...comments].sort((a, b) => b.created - a.created);

    return (
        <section aria-labelledby="comments-heading">
            <h2 id="comments-heading">Comments</h2>

            <CommentsStack spacing={1} id="comments-stack" role="list">
                {sortedComments.map((comment: Comment) => (
                    <div role="listitem" key={comment.ID}>
                        <ProjectComment comment={comment} projectID={projectID} projectTitle={title} />
                    </div>
                ))}
            </CommentsStack>
        </section>
    );
}
