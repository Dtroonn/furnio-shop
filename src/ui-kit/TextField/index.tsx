import clsx from "clsx";
import React from "react";

import classes from "./TextField.module.scss";
import { ITextFieldProps } from "./TextField.props.interface";

export const TextField: React.FC<ITextFieldProps> = ({
    placeholder = "",
    fullWidth,
    className,
}) => {
    return (
        <input
            placeholder={placeholder}
            className={clsx(classes.input, className, {
                [classes.fullWidth]: fullWidth,
            })}
        />
    );
};
