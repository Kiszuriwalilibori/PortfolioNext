import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AddCommentButton from "./AddCommentButton";

import { useFirebaseAuth } from "@/contexts";
import { useMessage } from "@/hooks";
import { requestLogin } from "@/fbase/auth";

jest.mock("@/contexts", () => ({
    useFirebaseAuth: jest.fn(),
}));

jest.mock("@/hooks", () => ({
    useBoolean: jest.requireActual("@/hooks/useBoolean").default,
    useMessage: jest.fn(),
}));

jest.mock("@/fbase/auth", () => ({
    requestLogin: jest.fn(),
}));

jest.mock("./CommentEditorDialog", () => ({
    CommentEditorDialog: ({ onClose }: { onClose: () => void }) => (
        <div data-testid="comment-dialog">
            <span>Comment dialog</span>
            <button onClick={onClose}>Close</button>
        </div>
    ),
}));

const mockedUseFirebaseAuth = jest.mocked(useFirebaseAuth);
const mockedUseMessage = jest.mocked(useMessage);
const mockedRequestLogin = jest.mocked(requestLogin);

describe("AddCommentButton", () => {
    const props = {
        title: "Test project",
        ID: "project-id",
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("opens comment dialog for logged user", async () => {
        mockedUseFirebaseAuth.mockReturnValue({
            user: {
                displayName: "John",
                email: "john@test.com",
                uid: "123",
            },
            isLogged: true,
        });

        mockedUseMessage.mockReturnValue({
            info: jest.fn(),
            success: jest.fn(),
            warning: jest.fn(),
            error: jest.fn(),
        });

        const user = userEvent.setup();

        render(<AddCommentButton {...props} />);

        await user.click(
            screen.getByRole("button", {
                name: /leave a comment/i,
            })
        );

        expect(screen.getByTestId("comment-dialog")).toBeInTheDocument();
    });

    it("calls requestLogin for guest user", async () => {
        mockedUseFirebaseAuth.mockReturnValue({
            user: undefined,
            isLogged: false,
        });

        mockedUseMessage.mockReturnValue({
            info: jest.fn(),
            success: jest.fn(),
            warning: jest.fn(),
            error: jest.fn(),
        });

        const user = userEvent.setup();

        render(<AddCommentButton {...props} />);

        await user.click(
            screen.getByRole("button", {
                name: /leave a comment/i,
            })
        );

        expect(mockedRequestLogin).toHaveBeenCalledTimes(1);
    });

    it("shows login error message when authentication fails", async () => {
        const errorMock = jest.fn();

        mockedUseFirebaseAuth.mockReturnValue({
            user: undefined,
            isLogged: false,
        });

        mockedUseMessage.mockReturnValue({
            info: jest.fn(),
            success: jest.fn(),
            warning: jest.fn(),
            error: errorMock,
        });

        mockedRequestLogin.mockImplementation((_success: () => void, error: (message: string) => void) => {
            error("Authentication failed");
        });

        const user = userEvent.setup();

        render(<AddCommentButton {...props} />);

        await user.click(
            screen.getByRole("button", {
                name: /leave a comment/i,
            })
        );

        expect(errorMock).toHaveBeenCalledWith("Login failed: Authentication failed");
    });
});
