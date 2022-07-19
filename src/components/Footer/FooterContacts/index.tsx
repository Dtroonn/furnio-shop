import React from "react";
import classes from "../Footer.module.scss";

import { Text } from "ui-kit/Text";
import { Icon } from "ui-kit/Icon";
import clsx from "clsx";

export const FooterContacts: React.FC = () => {
    return (
        <>
            <div className={clsx(classes["footer-item__item"])}>
                <Text size="body4" color="darkGray">
                    Worldwide furniture store since 2020. We sell over 1000+ branded products on our
                    website
                </Text>
            </div>
            <a
                href="https://github.com"
                className={clsx(classes["footer-item__item"], classes["footer-item__item_link"])}>
                <Icon icon="location" className={classes["footer-item__icon"]} />
                <Text size="body4" color="darkGray">
                    Sawojajar Malang, Indonesia
                </Text>
            </a>
            <a
                href="tel:+6289 456 3455"
                className={clsx(classes["footer-item__item"], classes["footer-item__item_link"])}>
                <Icon icon="phone" className={classes["footer-item__icon"]} />
                <Text size="body4" color="darkGray">
                    +6289 456 3455
                </Text>
            </a>
        </>
    );
};
