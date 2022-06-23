import clsx from "clsx";
import React from "react";

import classes from "./Button.module.scss";

const colorsClasses = {
    orange: classes["button_orange"],
    white: classes["button_white"],
};

const sizesClasses = {
    big: classes["button_big"],
    medium: classes["button_medium"],
};

interface IButtonProps {
    className?: string;
    color?: keyof typeof colorsClasses;
    type?: "button" | "submit";
    size?: keyof typeof sizesClasses;
    fullWidth?: boolean;
    outline?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
    color = "orange",
    className,
    children,
    type = "button",
    size = "medium",
    fullWidth,
    outline,
}) => {
    return (
        <button
            type={type}
            className={clsx(classes.button, colorsClasses[color], sizesClasses[size], className, {
                [classes["button_fullWidth"]]: fullWidth,
                [classes["button_outline"]]: outline,
            })}>
            {children}
        </button>
    );
};
