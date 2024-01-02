import React, { forwardRef, Ref } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const MyButton = React.forwardRef((props: ButtonProps, ref: any) => {
    const { children, className = "", type = "button", ...rest } = props;

    return (
        <button className={className} type={type} {...rest} tabIndex={0} ref={ref}>
            {children}
        </button>
    );
});

MyButton.displayName = "MyButton";

export default MyButton;
