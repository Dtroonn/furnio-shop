import React from "react";

import { Icon } from "ui-kit/Icon";

import { IMenuItemProps } from "./MenuItem.props.interface";

import classes from "../Menu.module.scss";

export const MenuItem: React.FC<IMenuItemProps> = ({ title, src, items }) => {
    return (
        <li>
            <a href="" className={classes["menu__link"]}>
                <span>{title}</span>
                {items && (
                    <div className={classes["menu__icon-arrow-wrapper"]}>
                        <Icon className={classes.menu__arrow} icon="arrow-down" />
                    </div>
                )}
            </a>
            {items && (
                <ul className={classes["sub-menu-list"]}>
                    {items.map((item) => (
                        <li>
                            <a href="" className={classes["sub-menu-list__link"]}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};
