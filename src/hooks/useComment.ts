import { useCallback, useState } from "react";

const INITIAL_COMMENT = "" as string;

export const useComment = () => {
    const [comment, setComment] = useState(INITIAL_COMMENT);

    const createComment = useCallback((text: typeof INITIAL_COMMENT) => {
        setComment(text);
    }, []);
    const clearComment = useCallback(() => {
        setComment(INITIAL_COMMENT);
    }, []);

    return { comment, clearComment, createComment };
};

export default useComment;
