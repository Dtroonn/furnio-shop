import clsx from "clsx";
import React from "react";

import classes from "./SliderArrow.module.scss";
import { Icon } from "../Icon";

const colorsClassNames = {
    //пустой т.к он по дефолту
    orange: "",
    white: classes.arrow_white,
};

const directionClassNames = {
    //пустой т.к он по дефолту
    right: "",
    left: classes.arrow_left,
};

interface ISliderArrowProps {
    color?: keyof typeof colorsClassNames;
    direction?: keyof typeof directionClassNames;
    className?: string;
    onClick?: () => void;
}

export const SliderArrow = React.forwardRef<HTMLButtonElement, ISliderArrowProps>(
    ({ color = "orange", direction = "right", className, onClick }, ref) => {
        return (
            <button
                ref={ref}
                onClick={onClick}
                className={clsx(
                    classes.arrow,
                    colorsClassNames[color],
                    directionClassNames[direction],
                    className,
                )}>
                <Icon icon="arrow-down" className={classes["arrow__icon"]} />
            </button>
        );
    },
);
