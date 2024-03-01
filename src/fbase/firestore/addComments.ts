import { getFirestore, doc, setDoc } from "firebase/firestore";
import { COLLECTION_COMMENTS_NAME } from "config/config";

import firebase_app from "../config";

import { CommentType } from "types";

const db = getFirestore(firebase_app);

export default async function addComments(
    id: string,
    data: CommentType,
    handleSuccess: Function,
    handleError: Function
) {
    try {
        await setDoc(doc(db, COLLECTION_COMMENTS_NAME, id), data, {
            merge: true,
        }).then(handleSuccess());
    } catch (e) {
        handleError(e);
    }
}
