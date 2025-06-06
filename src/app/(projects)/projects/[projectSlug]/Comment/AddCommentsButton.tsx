"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { CommentType } from "@/types";
import { useBoolean, useMessage } from "@/hooks";
import { requestLogin } from "@/fbase";
import { useFirebaseAuth } from "@/contexts";
import { CommentsButton } from "./Comment.style";
import { CommentInputModal } from "../AddComment/CommentInputModal";
import { CommentsStack } from "../Comments/Comments.style";
import Comment from "../Comment";

interface Props {
    title: string;
    ID: string;
}

export const AddCommentsButton = (props: Props) => {
    const { title, ID } = props;
    const [isModalOpen, openModal, closeModal] = useBoolean(false);
    const { user, isLogged } = useFirebaseAuth();
    const showMessage = useMessage();
    const [optimisticComments, setOptimisticComments] = useState<CommentType[]>([]);
    const router = useRouter();

    const handleLeaveACommentClick = useCallback(() => {
        if (isLogged && user) {
            openModal();
        } else {
            requestLogin(
                () => openModal(),
                (error: string) => showMessage.error(`Login failed: ${error}`)
            );
        }
    }, [isLogged, user, openModal, showMessage]);

    const handleCommentAdded = useCallback(
        (comment: CommentType | null) => {
            if (comment === null) {
                setOptimisticComments([]);
                return;
            }
            setOptimisticComments(prev => [...prev, comment]);
            router.refresh();

            setTimeout(() => {
                setOptimisticComments([]);
            }, 2000);
        },
        [router]
    );

    return (
        <>
            <CommentsButton variant="contained" onClick={handleLeaveACommentClick} id="add comment button" aria-label="Leave a comment on the project">
                Leave a comment
            </CommentsButton>
            <CommentsStack spacing={1}>
                {optimisticComments.map(comment => (
                    <Comment comment={comment} key={comment.ID} />
                ))}
            </CommentsStack>
            {isModalOpen && user && <CommentInputModal isOpen={isModalOpen} onClose={closeModal} author={user.displayName || "Anonymous"} authorEmail={user.email || ""} project={title} ID={ID} onCommentAdded={handleCommentAdded} />}
        </>
    );
};

export default AddCommentsButton;
