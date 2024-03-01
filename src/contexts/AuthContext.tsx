import React, { FC, ReactNode } from "react";
import { getAuth, onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import firebase_app from "../fbase/config";

import { User } from "types";
import useBoolean from "hooks/useBoolean";

interface Props {
    user: User | undefined;
    isLogged: boolean;
}

const INITIAL_USER = undefined;

const auth = getAuth(firebase_app);

type usr = Pick<FirebaseUser, "uid" | "email" | "displayName">;
type Mutable<Type> = {
    -readonly [Key in keyof Type]: Type[Key];
};
type ob = Mutable<usr>;

type XUser = { [key in keyof ob]: string };
function createSimplifiedUser(user: XUser) {
    const simplifiedUser = (({ uid, email, displayName }) => ({ uid, email, displayName }))(user);
    return simplifiedUser;
}

/// definicje powyżej nie są takie jak u mnie - nullowalne są. Na później
export const AuthContext = React.createContext({} as Props);

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = React.useState<User | undefined>(INITIAL_USER);
    const [isLogged, setIsLoggedTrue, setIsLoggedFalse] = useBoolean(false);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(createSimplifiedUser(user as XUser));
                setIsLoggedTrue();
            } else {
                setUser(INITIAL_USER);
                setIsLoggedFalse();
            }
        });

        return () => unsubscribe();
    }, []);

    return <AuthContext.Provider value={{ user: user, isLogged: isLogged }}>{children}</AuthContext.Provider>;
};
