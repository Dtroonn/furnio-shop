import React from 'react';
import classes from './header.module.scss';
import clsx from 'clsx';
import { Menu } from './Menu';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    console.log(classes.header__container);
    return (
        <div className={classes.header}>
            <div className={clsx('_container', classes.header__container)}>
                <div className={classes['header-content-left']}>
                    <div className={classes['header-content-left__column']}>
                        <Link to="/" className={classes['header-content-left__logo']}>
                            Funiro.
                        </Link>
                    </div>
                    <div className={classes['header-content-left__column']}>
                        <Menu />
                    </div>
                </div>
                <div className={classes['header-content-right']}>
                    <div className={classes['header-content-right__column']}></div>
                </div>
            </div>
        </div>
    );
};
