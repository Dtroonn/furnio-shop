import React from "react";
import classes from "./header.module.scss";
import clsx from "clsx";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";
import { Icon } from "ui-kit/Icon";
import { Avatar } from "ui-kit/Avatar";

import avaBaskov from "assets/baskov.jpg";
import { useBreakpoint } from "hooks/useBreakpoint";
import { breakpointsTypes } from "common/constans";
import { Search } from "./Search";

export const Md2Headercontext = React.createContext<boolean>(false);

export const Header: React.FC = () => {
    const isMd2 = useBreakpoint("max-width", breakpointsTypes.md2);

    return (
        <Md2Headercontext.Provider value={isMd2}>
            <header className={classes.header}>
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
                        {!isMd2 && (
                            <div className={classes["header-content-left__column"]}>
                                <Search />
                            </div>
                        )}
                    </div>
                    <div className={classes["header-content-right"]}>
                        <div
                            className={clsx(
                                classes["header-content-right__actions"],
                                classes["actions-header"],
                            )}>
                            {isMd2 && (
                                <div
                                    className={clsx(
                                        classes["actions-header__item"],
                                        classes["actions-header__item_search"],
                                    )}>
                                    <Search />
                                </div>
                            )}
                            <div className={classes["actions-header__item"]}>
                                <Link to="/favorites" className={classes["actions-header__link"]}>
                                    <Icon icon="like" className={classes["actions-header__icon"]} />
                                </Link>
                            </div>
                            <div className={classes["actions-header__item"]}>
                                <Link to="/cart" className={classes["actions-header__link"]}>
                                    <Icon icon="cart" className={classes["actions-header__icon"]} />
                                </Link>
                            </div>
                            <div className={classes["actions-header__item"]}>
                                <Avatar url={avaBaskov} />
                            </div>
                            {isMd2 && (
                                <div
                                    className={clsx(
                                        classes["actions-header__item"],
                                        classes["actions-header__item_menu"],
                                    )}>
                                    <Menu />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </Md2Headercontext.Provider>
    );
};
