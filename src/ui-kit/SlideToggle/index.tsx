import React from "react";

import { ISlideToggleProps } from "./SlideToggle.props.interface";
import classes from "./SlideToggle.module.scss";

export const SlideToggle: React.FC<ISlideToggleProps> = ({ open, children }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const childElemOfffsetHeight =
        //@ts-ignore
        containerRef.current && containerRef.current.firstChild.offsetHeight;

    return (
        <div
            className={classes.container}
            ref={containerRef}
            style={{ height: open ? `${childElemOfffsetHeight}px` : 0 }}>
            {children}
        </div>
    );
};
