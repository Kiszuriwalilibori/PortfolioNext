import firebase_app from "../config";

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getComments } from "fbase/firestore/getComments";

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const requestLogin = (handleSuccess, handleError) => {
    signInWithPopup(auth, provider)
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = { ...result.user };

            const user_store = {
                id: user.uid,
                email: user.email,
                name: user.displayName,
                picture: user.photoURL,
            };

            handleSuccess(user_store);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        })
        .catch(error => {
            handleError(error.code + " " + error.message);

            // // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.customData.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
};

export const requestLogout = () => {
    const auth = getAuth();
    signOut(auth)
        .then(() => {})
        .catch(error => {
            console.log(JSON.stringify(error));
        });
};
