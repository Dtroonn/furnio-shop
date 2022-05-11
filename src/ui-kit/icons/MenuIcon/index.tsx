import clsx from "clsx";
import React from "react";

import classes from "./MenuIcon.module.scss";
import { IMenuIconProps } from "./MenuIcon.props.interface";

export const MenuIcon: React.FC<IMenuIconProps> = ({ active = false }) => {
    return (
        <div
            className={clsx(classes["menu-icon"], {
                [classes["menu-icon_active"]]: active,
            })}>
            <span className={classes["menu-icon__line"]}></span>
            <span className={classes["menu-icon__line"]}></span>
            <span className={classes["menu-icon__line"]}></span>
        </div>
    );
};
