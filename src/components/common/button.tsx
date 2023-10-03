import React, { forwardRef, Ref } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function MyButton(props: ButtonProps) {
    const { children, className = "", type = "button", ...rest } = props;

    return (
        <button className={className} type={type} {...rest} tabIndex={0}>
            {children}
        </button>
    );
}

export default MyButton;
