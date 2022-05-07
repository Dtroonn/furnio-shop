import React from 'react';

import classes from './Menu.module.scss';

export const Menu = () => {
    return (
        <div className={classes.menu}>
            <div className={classes['menu__body-wrapper']}>
                <nav className={classes.menu__body}>
                    <ul className={classes.menu__list}>
                        <li>
                            <a href="" className={classes.menu__link}>
                                Products
                                <svg
                                    className={classes.menu__arrow}
                                    width="14"
                                    height="9"
                                    viewBox="0 0 14 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.8333 1.50012L7.00001 7.33346L1.16668 1.50012"
                                        stroke="#3A3A3A"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>

                            <ul className={classes['sub-menu-list']}>
                                <li>
                                    <a href="" className={classes['sub-menu-list__link']}>
                                        Подпункт1
                                    </a>
                                </li>
                                <li>
                                    <a href="" className={classes['sub-menu-list__link']}>
                                        Подпункт2
                                    </a>
                                </li>
                                <li>
                                    <a href="" className={classes['sub-menu-list__link']}>
                                        Подпункт3
                                    </a>
                                </li>
                                <li>
                                    <a href="" className={classes['sub-menu-list__link']}>
                                        Подпункт4
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="" className={classes.menu__link}>
                                Rooms
                                <svg
                                    className={classes.menu__arrow}
                                    width="14"
                                    height="9"
                                    viewBox="0 0 14 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.8333 1.50012L7.00001 7.33346L1.16668 1.50012"
                                        stroke="#3A3A3A"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>

                            <ul className={classes['sub-menu-list']}>
                                <li>
                                    <a href="" className={classes['sub-menu-list__link']}>
                                        Подпункт1
                                    </a>
                                </li>
                                <li>
                                    <a href="" className={classes['sub-menu-list__link']}>
                                        Подпункт2
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="" className={classes.menu__link}>
                                Inspirations
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
