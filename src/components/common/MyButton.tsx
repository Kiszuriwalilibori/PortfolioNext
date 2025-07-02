import React, { forwardRef, Ref } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    type?: "button" | "submit" | "reset"; // Add type validation
};

export const MyButton = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement> | undefined) => {
    const { children, className = "", type = "button", ...rest } = props;

    return (
        <button className={className} type={type} {...rest} ref={ref}>
            {children}
        </button>
    );
});

MyButton.displayName = "MyButton";

export default MyButton;
