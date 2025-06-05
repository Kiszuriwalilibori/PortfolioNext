import { getFirestore, doc, setDoc } from "firebase/firestore";
import { COLLECTION_COMMENTS_NAME } from "@/config/config";

import firebase_app from "../config";

import { CommentType } from "@/types";

const db = getFirestore(firebase_app);

export default async function addComments(data: CommentType, handleSuccess: Function, handleError: Function) {
    console.log("Adding comment by addComments:", data);
    try {
        const ID = `${data.author} ${data.project} ${data.created}`;
        await setDoc(doc(db, COLLECTION_COMMENTS_NAME, ID), data, {
            merge: true,
        }).then(handleSuccess());
    } catch (e) {
        handleError(e);
    }
}
