import { setDoc,doc } from "firebase/firestore";
import { COLLECTION_COMMENTS_NAME } from "config/config";
import { dbase } from "fbase/config";
import { CommentType } from "types";



export default async function addComments(data: CommentType, handleSuccess: Function, handleError: Function) {
    try {
        const ID = `${data.author} ${data.project} ${data.created}`;
        await setDoc(doc(dbase, COLLECTION_COMMENTS_NAME, ID), data, {
            merge: true,
        }).then(handleSuccess());
    } catch (e) {
        handleError(e);
    }
}
