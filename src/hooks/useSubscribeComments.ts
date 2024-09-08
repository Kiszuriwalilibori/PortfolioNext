import { collection, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import { dbase } from "fbase/config";

function byField(fieldName: string) {
    return (a: any, b: any) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

export const useSubscribeComments = (ID: string) => {
    const ref = query(collection(dbase, "comments"), where("projectID", "==", ID));
    const [value, loading, error] = useCollection(ref, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });

    const unsortedComments = value
        ? value.docs.map(doc => {
              return { ...doc.data(), ID: doc.id };
          })
        : null;

    const comments = unsortedComments ? unsortedComments.sort(byField("created")) : undefined;

    return { comments, loading, error };
};

export default useSubscribeComments;
