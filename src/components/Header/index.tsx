import React from "react";
import classes from "./header.module.scss";
import clsx from "clsx";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";
import { SearchField } from "ui-kit/SearchField";
import { Icon } from "ui-kit/Icon";
import { Avatar } from "ui-kit/Avatar";

import avaBaskov from "assets/baskov.jpg";
import { useBreakpoint } from "hooks/useBreakpoint";
import { breakpointsTypes } from "common/constans";

export const Header: React.FC = () => {
    const isMd2 = useBreakpoint("max-width", breakpointsTypes.md2);

    return (
        <div className={classes.header}>
            <div className={clsx("_container", classes.header__container)}>
                <div className={classes["header-content-left"]}>
                    <div className={classes["header-content-left__column"]}>
                        <Link to="/" className={classes["header-content-left__logo"]}>
                            Funiro.
                        </Link>
                    </div>
                    {!isMd2 && (
                        <div className={classes["header-content-left__column"]}>
                            <Menu />
                        </div>
                    )}
                    <div className={classes["header-content-left__column"]}>
                        <SearchField />
                    </div>
                </div>
                <div className={classes["header-content-right"]}>
                    <div
                        className={clsx(
                            classes["header-content-right__actions"],
                            classes["actions-header"],
                        )}>
                        <div className={classes["actions-header__item"]}>
                            <Icon icon="like" />
                        </div>
                        <div className={classes["actions-header__item"]}>
                            <Icon icon="cart" />
                        </div>
                        <div className={classes["actions-header__item"]}>
                            <Avatar url={avaBaskov} />
                        </div>
                        {isMd2 && (
                            <div className={classes["actions-header__menu"]}>
                                <Menu />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
