// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
// import { auth } from "@/fbase/config";
// import { User } from "@/types";

// export interface SimplifiedUser {
//     uid: string;
//     email: string | null;
//     displayName: string | null;
// }

// interface AuthState {
//     user: SimplifiedUser | null;
//     isLogged: boolean;
//     setUser: (user: SimplifiedUser | null) => void;
//     setIsLogged: (isLogged: boolean) => void;
// }
// const createSimplifiedUser = (user: Partial<FirebaseUser>): SimplifiedUser => ({
//     uid: user.uid ?? "",
//     email: user.email ?? null,
//     displayName: user.displayName ?? null,
// });

// export const useAuthStore = create<AuthState>()(
//     persist(
//         set => ({
//             user: null,
//             isLogged: false,
//             setUser: user => set({ user }),
//             setIsLogged: isLogged => set({ isLogged }),
//         }),
//         {
//             name: "auth-storage",
//             partialize: state => ({ user: state.user, isLogged: state.isLogged }),
//         }
//     )
// );
// export const initializeAuth = () => {
//     if (typeof window === "undefined") return () => {};

//     try {
//         const unsubscribe = onAuthStateChanged(
//             auth,
//             firebaseUser => {
//                 const { setUser, setIsLogged } = useAuthStore.getState();
//                 if (firebaseUser) {
//                     setUser(createSimplifiedUser(firebaseUser));
//                     setIsLogged(true);
//                 } else {
//                     setUser(null);
//                     setIsLogged(false);
//                 }
//             },
//             error => {
//                 console.error("Auth state change error:", error);
//             }
//         );

//         return unsubscribe;
//     } catch (error) {
//         console.error("Failed to initialize Firebase auth:", error);
//         return () => {};
//     }
// };
export default {};
