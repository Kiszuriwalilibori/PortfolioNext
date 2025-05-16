// // components/AuthProvider.tsx
// "use client";

// import { useEffect, FC, ReactNode } from "react";
// import { initializeAuth } from "@/store/auth";

// interface AuthProviderProps {
//     children: ReactNode;
// }

// export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
//     useEffect(() => {
//         const unsubscribe = initializeAuth();
//         return () => unsubscribe();
//     }, []);

//     return <>{children}</>;
// };
export default {};
