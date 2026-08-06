import { render } from "@testing-library/react";

import { FirebaseAuthContextProvider } from "./FirebaseAuthContext";

import { onAuthStateChanged } from "firebase/auth";

jest.mock("firebase/auth", () => ({
    getAuth: jest.fn(() => ({})),
    onAuthStateChanged: jest.fn(),
}));

const mockedOnAuthStateChanged = jest.mocked(onAuthStateChanged);

describe("FirebaseAuthContextProvider", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        mockedOnAuthStateChanged.mockReturnValue(jest.fn());
    });

    it("subscribes to auth state changes once", () => {
        const { rerender } = render(
            <FirebaseAuthContextProvider>
                <div />
            </FirebaseAuthContextProvider>
        );

        rerender(
            <FirebaseAuthContextProvider>
                <div />
            </FirebaseAuthContextProvider>
        );

        expect(mockedOnAuthStateChanged).toHaveBeenCalledTimes(1);
    });
    it("handles auth listener error", () => {
        const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});

        let authErrorCallback!: (error: Error) => void;

        mockedOnAuthStateChanged.mockImplementation((_auth, _callback, errorCallback) => {
            authErrorCallback = errorCallback!;

            return jest.fn();
        });

        render(
            <FirebaseAuthContextProvider>
                <div />
            </FirebaseAuthContextProvider>
        );

        authErrorCallback(new Error("Firebase auth failed"));

        expect(consoleError).toHaveBeenCalledWith("Firebase auth listener error:", expect.any(Error));

        consoleError.mockRestore();
    });
});
