import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const requestLogin = (handleSuccess: () => void, handleError: (message: string) => void) => {
    signInWithPopup(auth, provider)
        .then(() => {
            handleSuccess();
        })
        .catch(error => {
            handleError(error.code + " " + error.message);

            // // Handle Errors here.
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
