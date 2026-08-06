import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";

const getFirebaseAdminApp = () => {
    if (getApps().length === 0) {
        if (!process.env.FIREBASE_PRIVATE_KEY) {
            throw new Error("Missing FIREBASE_PRIVATE_KEY environment variable");
        }

        const serviceAccount = {
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        };

        return initializeApp({
            credential: cert(serviceAccount),
        });
    }
    return getApp();
};

export { getFirebaseAdminApp };
