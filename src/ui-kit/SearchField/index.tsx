import React from "react"
import { Icon } from "ui-kit/Icon"

import classes from "./SearchField.module.scss"

export const SearchField = () => {
    return (
        <div className={classes.search}>
            <div className={classes["search__icon-wrapper"]}>
                <Icon icon="search" />
            </div>
            <div className={classes["search__input-wrapper"]}>
                <input className={classes.search__input} />
            </div>
        </div>
    )
}
