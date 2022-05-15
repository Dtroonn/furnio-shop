import React from "react";

import classes from "./FullscreenSearchBox.module.scss";

import { SearchField } from "../SearchField";
import { IFullscreenSearchBoxProps } from "./FullscreenSearchBox.props.interface";
import clsx from "clsx";

export const FullscreenSearchBox: React.FC<IFullscreenSearchBoxProps> = ({ open, onClose }) => {
    return (
        <div
            className={clsx(classes["search-box"], {
                [classes.active]: open,
            })}>
            <div className={classes["search-box__row"]}>
                <div className={classes["search-box__column"]}>
                    <SearchField className={classes["search-box__search-field"]} />
                </div>
                <div className={classes["search-box__column"]}>
                    <div className={classes["search-box__cancel-button"]} onClick={onClose}>
                        Отменить
                    </div>
                </div>
            </div>
        </div>
    );
};
