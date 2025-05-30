import { useCallback, useState } from "react";

export const useComment = (initialComment: string) => {
    const [comment, setComment] = useState(initialComment);

    const createComment = useCallback((text: typeof initialComment) => {
        setComment(text);
    }, []);
    const clearComment = useCallback(() => {
        setComment(initialComment);
    }, []);

    return { comment, clearComment, createComment };
};

export default useComment;
