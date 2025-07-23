import React, { forwardRef, Ref } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    type?: "button" | "submit" | "reset";
};

export const MyButton = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement> | undefined) => {
    const { children, className = "", type = "button", "aria-label": ariaLabel, ...rest } = props;

    return (
        <button className={className} type={type} {...rest} ref={ref} aria-label={ariaLabel}>
            {children}
        </button>
    );
});

MyButton.displayName = "MyButton";

export default MyButton;
