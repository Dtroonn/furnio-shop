import clsx from "clsx";
import React from "react";
import { Icon } from "ui-kit/Icon";
import { Text } from "ui-kit/Text";
import { SlideToggle } from "ui-kit/SlideToggle";
import classes from "./Accordion.module.scss";
import { IAccordionProps } from "./Accordion.props";

export const Accordion: React.FC<IAccordionProps> = ({ title, className, children }) => {
    const [open, setOpen] = React.useState<boolean>(false);

    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className={clsx(classes.accordion, className)}>
            <div onClick={toggleOpen} className={classes.accordion__header}>
                <Text size="body1">{title}</Text>
                <Icon icon="arrow-down" className={classes.accordion__icon} />
            </div>
            <SlideToggle open={open}>
                <div className={classes.accordion__body}>{children}</div>
            </SlideToggle>
        </div>
    );
};
