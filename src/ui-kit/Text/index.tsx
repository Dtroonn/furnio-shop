import clsx from "clsx";
import React from "react";

import classes from "./Text.module.scss";

const sizesClasses = {
    h1: classes.h1,
    h2: classes.h2,
    h4: classes.h4,
    h5: classes.h5,
    body1: classes.body1,
    body2: classes.body2,
    body3: classes.body3,
    body4: classes.body4,
    body5: classes.body5,
};

const colorsClasses = {
    mainColor: classes["text_mainColor"],
    white: classes["text_white"],
    gray: classes["text_gray"],
    darkGray: classes["text_darkGray"],
    lightGray: classes["text_lightGray"],
};

export interface ITextProps {
    className?: string;
    size?: keyof typeof sizesClasses;
    color?: keyof typeof colorsClasses;
}

export const Text: React.FC<ITextProps> = ({
    className,
    size = "h1",
    color = "mainColor",
    children,
}) => {
    return (
        <p className={clsx(classes.text, sizesClasses[size], colorsClasses[color], className)}>
            {children}
        </p>
    );
};
