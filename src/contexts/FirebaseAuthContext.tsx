"use client";

import React, { FC, ReactNode } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase_app from "../fbase/config";

import { FirebaseUserSubset, AuthUser } from "@/types";
import { useBoolean } from "@/hooks";

interface FirebaseAuthContextValue {
    user: AuthUser | undefined;
    isLogged: boolean;
}

const INITIAL_USER_STATE = undefined;

const auth = getAuth(firebase_app);

function mapFirebaseUserToAuthUser(user: FirebaseUserSubset): AuthUser {
    const authUser = (({ uid, email, displayName }) => ({ uid, email, displayName }))(user);
    return authUser;
}

/// definicje powyżej nie są takie jak u mnie - nullowalne są. Na później
export const FirebaseAuthContext = React.createContext({} as FirebaseAuthContextValue);

export const useFirebaseAuth = () => React.useContext(FirebaseAuthContext);

export const FirebaseAuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [authUser, setAuthUser] = React.useState<AuthUser | undefined>(INITIAL_USER_STATE);
    const [isAuthenticated, setIsAuthenticatedTrue, setIsAuthenticatedFalse] = useBoolean(false);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setAuthUser(mapFirebaseUserToAuthUser(user as FirebaseUserSubset));
                setIsAuthenticatedTrue();
            } else {
                setAuthUser(INITIAL_USER_STATE);
                setIsAuthenticatedFalse();
            }
        });

        return () => unsubscribe();
    }, []);

    return <FirebaseAuthContext.Provider value={{ user: authUser, isLogged: isAuthenticated }}>{children}</FirebaseAuthContext.Provider>;
};
