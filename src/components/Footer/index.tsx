import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "ui-kit/Button";
import { Icon } from "ui-kit/Icon";

import { Text } from "ui-kit/Text";
import { TextField } from "ui-kit/TextField";

import classes from "./Footer.module.scss";
import { FooterItem } from "./FooterItem";
import { IFooterItemProps } from "./FooterItem/FooterItem.props.interface";

const items: IFooterItemProps[] = [
    {
        title: "Menu",
        items: [
            {
                name: "Products",
                to: "/",
            },
            {
                name: "Rooms",
                to: "/",
            },
            {
                name: "Inspirations",
                to: "/",
            },
            {
                name: "About Us",
                to: "/",
            },
            {
                name: "Terms & Policy",
                to: "/",
            },
        ],
    },
    {
        title: "Account",
        items: [
            {
                name: "My Account",
                to: "/",
            },
            {
                name: "Checkout",
                to: "/",
            },
            {
                name: "My Cart",
                to: "/",
            },
            {
                name: "My catalog",
                to: "/",
            },
        ],
    },
    {
        title: "Stay Connected",
        items: [
            {
                name: "Facebook",
                to: "/",
            },
            {
                name: "Instagram",
                to: "/",
            },
            {
                name: "Twitter",
                to: "/",
            },
        ],
    },
];

export const Footer: React.FC = () => {
    return (
        <footer className={classes["footer"]}>
            <div className="_container">
                <div className={classes["footer__row"]}>
                    <div className={classes["footer__column"]}>
                        <div className={classes["footer-item"]}>
                            <div className={classes["footer-item__title"]}>Funiro.</div>
                            <div className={clsx(classes["footer-item__item"])}>
                                <Text size="body4" color="darkGray">
                                    Worldwide furniture store since 2020. We sell over 1000+ branded
                                    products on our website
                                </Text>
                            </div>
                            <a
                                href="https://github.com"
                                className={clsx(
                                    classes["footer-item__item"],
                                    classes["footer-item__item_link"],
                                )}>
                                <Icon icon="location" className={classes["footer-item__icon"]} />
                                <Text size="body4" color="darkGray">
                                    Sawojajar Malang, Indonesia
                                </Text>
                            </a>
                            <a
                                href="tel:+6289 456 3455"
                                className={clsx(
                                    classes["footer-item__item"],
                                    classes["footer-item__item_link"],
                                )}>
                                <Icon icon="phone" className={classes["footer-item__icon"]} />
                                <Text size="body4" color="darkGray">
                                    +6289 456 3455
                                </Text>
                            </a>
                        </div>
                    </div>

                    {items.map((item) => (
                        <div className={classes["footer__column"]}>
                            <FooterItem title={item.title} items={item.items} />
                        </div>
                    ))}

                    <div className={classes["footer__column"]}>
                        <div className={classes["footer-item"]}>
                            <div className={classes["footer-item__title"]}>Stay Updated</div>
                            <div className={classes["email-form"]}>
                                <TextField
                                    placeholder="Enter your email"
                                    className={classes["email-form__input"]}
                                />
                                <Button className={classes["email-form__btn"]}>
                                    <Icon icon="send" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
