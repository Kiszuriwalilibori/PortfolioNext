"use client";

import { FirebaseAuthContextProvider } from "@/contexts";
import LoggedUser from "./LoggedUser";

export default function LoggedUserWithAuth() {
    return (
        <FirebaseAuthContextProvider>
            <LoggedUser />
        </FirebaseAuthContextProvider>
    );
}
