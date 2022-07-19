import clsx from "clsx";
import { breakpointsTypes } from "common/constans";
import { useBreakpoint } from "hooks/useBreakpoint";
import React from "react";
import { Accordion } from "ui-kit/Accordion";

import { Button } from "ui-kit/Button";
import { Icon } from "ui-kit/Icon";

import { Text } from "ui-kit/Text";
import { TextField } from "ui-kit/TextField";
import { items } from "./constants";
import { FooterContacts } from "./FooterContacts";

import classes from "./Footer.module.scss";
import { FooterItem } from "./FooterItem";

// const componentWhichMoveChildrenToAccordionOnMobile: React.FC<{isMobile: boolean}> = ({isMobile, children}) => {

// }

export const Footer: React.FC = () => {
    const isMd4 = useBreakpoint("max-width", breakpointsTypes.md4);

    return (
        <footer className={classes["footer"]}>
            <div className="_container">
                <div className={classes["footer__row"]}>
                    <div className={classes["footer__column"]}>
                        <div className={classes["footer-item"]}>
                            {!isMd4 && <div className={classes["footer-item__title"]}>Funiro.</div>}
                            {isMd4 ? (
                                <Accordion title="Funiro.">
                                    <FooterContacts />
                                </Accordion>
                            ) : (
                                <FooterContacts />
                            )}
                        </div>
                    </div>

                    {items.map((item) => (
                        <div className={classes["footer__column"]}>
                            <FooterItem title={item.title} items={item.items} isMd4={isMd4} />
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
