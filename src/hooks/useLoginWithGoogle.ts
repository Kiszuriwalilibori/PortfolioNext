// import { googleLogout, useGoogleLogin, TokenResponse } from "@react-oauth/google";
// import axios from "axios";
// import { useState, useEffect, useCallback, useMemo } from "react";
// import useMessage from "./useMessage";
// import { isLoggedSelector, useIsLoggedStore } from "../store";
// import { useUser } from "../store/userStore";
// import { User } from "types";

// const INITIAL_GOOGLE_HELPER = {} as TokenResponse;

// export const useLoginWithGoogle = () => {
//     const showMessage = useMessage();
//     const [googleHelper, setGoogleHelper] = useState(INITIAL_GOOGLE_HELPER);

//     const { setIsLoggedTrue, setIsLoggedFalse } = useIsLoggedStore();
//     const isLogged = useIsLoggedStore(isLoggedSelector);
//     const setUser = useUser.use.setUser();
//     const clearUser = useUser.use.clearUser();
//     const user = useUser.use.user();

//     const memoisedUser = useMemo(() => {
//         return user;
//     }, [user]);

//     const logIn = useGoogleLogin({
//         onSuccess: tokenResponse => {
//             setGoogleHelper(tokenResponse);
//         },
//         onError: error => {
//             showMessage.error(`Login failed: ${error}`);
//         },
//     });

//     const logOut = useCallback(() => {
//         googleLogout();
//         clearUser();
//         setIsLoggedFalse();
//     }, []);

//     useEffect(() => {
//         if (googleHelper.access_token) {
//             console.log("próbuję pobrać detale", googleHelper.access_token);
//             axios
//                 .get<User>(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleHelper.access_token}`, {
//                     headers: {
//                         Authorization: `Bearer ${googleHelper.access_token}`,
//                         Accept: "application/json",
//                     },
//                 })
//                 .then(res => {
//                     setUser(res.data);
//                     setIsLoggedTrue();
//                 })
//                 .catch(err => showMessage.error(`Error: ${err}`));
//         }
//     }, [googleHelper]);

//     // useEffect(() => {
//     //     if (memoisedUser.name) {
//     //         showMessage.success(`You have succesfully logged as: ${memoisedUser.name}`);
//     //         showMessage.warning("However, adding comments functionality is still under construction");
//     //     }
//     // }, []);

//     return { isLogged, logIn, logOut, user: memoisedUser };
// };

// export default useLoginWithGoogle;

export {};
