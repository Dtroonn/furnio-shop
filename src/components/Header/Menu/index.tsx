import React from 'react';

import classes from './Menu.module.scss';

export const Menu = () => {
    return (
        <div className={classes.menu}>
            <div className={classes['menu__body-wrapper']}>
                <nav className={classes.menu__body}>
                    <ul className={classes.menu__list}>
                        <li>
                            <a href="" className={classes.menu__link}></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
