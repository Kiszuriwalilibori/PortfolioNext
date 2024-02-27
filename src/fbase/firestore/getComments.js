import firebase_app from "../../fbase/config";
import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function getDocument(collectionName) {
    let result = null;
    let error = null;

    try {
        const snapshot = await getDocs(collection(db, collectionName));

        snapshot.get().then(querySnapshot => {});

        result = snapshot.val();
    } catch (e) {
        error = e;
    }

    return { result, error };
}
