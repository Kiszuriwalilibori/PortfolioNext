// import firebase_app from "../config";
// import { googleLogout } from "@react-oauth/google";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const requestLogin = (handleSuccess: () => void, handleError: (message: string) => void) => {
    signInWithPopup(auth, provider)
        .then(result => {
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // const user = { ...result.user };

            // const user_store = {
            //     id: user.uid,
            //     email: user.email,
            //     name: user.displayName,
            // };

            // handleSuccess(user_store);
            handleSuccess();

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
        .then(() => {
            // auth.GoogleSignInApi.signOut();
            // googleLogout();
        })
        .catch(error => {
            console.log(JSON.stringify(error));
        });
};
