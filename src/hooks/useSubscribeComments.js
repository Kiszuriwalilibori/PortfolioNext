import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase_app from "fbase/config";

export const useSubscribeComments = project => {
    const [value, loading, error] = useCollection(collection(getFirestore(firebase_app), "comments"), {
        snapshotListenOptions: { includeMetadataChanges: true },
    });

    const allComments = value
        ? value.docs.map(doc => {
              return { ...doc.data(), ID: doc.id };
          })
        : null;

    const comments = allComments
        ? allComments
              .filter(comment => {
                  return comment.project === project;
              })
              .sort((a, b) => b.created - a.created)
        : undefined;

    return { comments, loading, error };
};

export default useSubscribeComments;
