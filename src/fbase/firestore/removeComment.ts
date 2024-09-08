import {doc, deleteDoc } from "firebase/firestore";
import { COLLECTION_COMMENTS_NAME } from "config/config";

import { dbase } from "../config";

export default async function removeComment(ID: string, handleSuccess: Function, handleError: Function) {
    try {
        await deleteDoc(doc(dbase, COLLECTION_COMMENTS_NAME, ID)).then(handleSuccess());
    } catch (e) {
        handleError(e);
    }
}
