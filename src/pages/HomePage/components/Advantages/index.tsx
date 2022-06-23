import clsx from "clsx";
import React from "react";

import { Text } from "ui-kit/Text";

import classes from "./Advantages.module.scss";

import highQualitySvg from "assets/highQuality.svg";
import warranyProtectionSvg from "assets/warranyProtection.svg";
import freeShippingSvg from "assets/freeShipping.svg";
import supportSvg from "assets/support.svg";

export const Advantages: React.FC = () => {
    const items = [
        {
            iconUrl: highQualitySvg,
            title: "High Quality",
            subtitle: "crafted from top materials",
        },
        {
            iconUrl: warranyProtectionSvg,
            title: "Warrany Protection",
            subtitle: "Over 2 years",
        },
        {
            iconUrl: freeShippingSvg,
            title: "Free Shipping",
            subtitle: "Order over 150 $",
        },
        {
            iconUrl: supportSvg,
            title: "24 / 7 Support",
            subtitle: "Dedicated support",
        },
    ];

    return (
        <div className={clsx(classes["advantages"])}>
            <div className="_container">
                <div className={classes["advantages__row"]}>
                    {items.map((item, index) => (
                        <div key={index} className={classes["advantages__column"]}>
                            <div className={classes["item-advantages"]}>
                                <div className={classes["item-advantages__icon"]}>
                                    <img src={item.iconUrl} alt="" />
                                </div>
                                <div className={classes["item-advantages__body"]}>
                                    <Text
                                        size="body2"
                                        className={classes["item-advantages__title"]}>
                                        {item.title}
                                    </Text>
                                    <Text size="body3" color="gray">
                                        {item.subtitle}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
