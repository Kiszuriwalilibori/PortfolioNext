import React, { FC, ReactNode } from "react";
import { getAuth, onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import firebase_app from "../fbase/config";

import { User } from "types";
import useBoolean from "hooks/useBoolean";

interface Props {
    user: User | undefined;
    isLogged: boolean;
}

const initialState = {
    user: undefined,
    isLogged: false,
};

const auth = getAuth(firebase_app);

function createSimplifiedUser(user: /*FirebaseUser*/ any): User {
    const simplifiedUser = {
        id: user.uid,
        email: user.email,
        name: user.displayName,
        picture: user.photoURL,
    };
    return simplifiedUser;
}
/// definicje powyżej nie są takie jak u mnie - nullowalne są. Na później
export const AuthContext = React.createContext({} as Props);

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = React.useState<User | undefined>(undefined);
    const [isLogged, setIsLoggedTrue, setIsLoggedFalse] = useBoolean(false);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(createSimplifiedUser(user));
                setIsLoggedTrue();
            } else {
                setUser(null as any);
                setIsLoggedFalse();
            }
        });

        return () => unsubscribe();
    }, []);

    return <AuthContext.Provider value={{ user: user, isLogged: isLogged }}>{children}</AuthContext.Provider>;
};
