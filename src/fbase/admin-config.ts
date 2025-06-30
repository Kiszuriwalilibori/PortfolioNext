import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";

const serviceAccount = {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
};

export const getFirebaseAdminApp = () => {
    if (getApps().length === 0) {
        return initializeApp({
            credential: cert(serviceAccount),
        });
    }
    return getApp();
};
