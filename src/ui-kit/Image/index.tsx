import clsx from "clsx";
import React from "react";

import classes from "./AdaptiveImage.module.scss";

interface IAdaptiveImageProps {
    className?: string;
    url: string;
}

export const AdaptiveImage: React.FC<IAdaptiveImageProps> = ({ url, className, children }) => {
    return (
        <div className={clsx(classes.image, className)} style={{ backgroundImage: `url(${url})` }}>
            {children}
        </div>
    );
};
