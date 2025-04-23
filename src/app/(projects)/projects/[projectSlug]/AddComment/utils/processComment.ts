import axios from "axios";
import { checkValidity } from "./checkValidity";

export const PERSPECTIVE_API_URL = "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=" + process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const config = {
    languages: ["en"],
    requestedAttributes: {
        TOXICITY: {},
        INSULT: {},
        FLIRTATION: {},
        THREAT: {},
    },
};

export const processComment = (comment: string, onSuccess: (arg0: string) => void, handleInvalidComment: () => void) => {
    let isCommentValid = true;
    axios
        .post(PERSPECTIVE_API_URL, {
            comment: {
                text: comment,
            },
            ...config,
        })
        .then(res => {
            const intents = res.data.attributeScores;
            isCommentValid = checkValidity(intents);
        })
        .then(() => {
            if (isCommentValid) {
                onSuccess(comment);
            } else {
                handleInvalidComment();
            }
        })
        .catch(() => {
            onSuccess(comment);
        });
};

export default processComment;
