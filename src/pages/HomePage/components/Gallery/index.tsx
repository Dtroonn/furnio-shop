import clsx from "clsx";
import React from "react";

import { Text } from "ui-kit/Text";

import classes from "./Gallery.module.scss";

import { AdaptiveImage } from "ui-kit/Image";
import { LazyImg } from "ui-kit/LazyImg";

import gallery1Jpg from "assets/gallery1.jpg";
import gallery2Jpg from "assets/gallery2.jpg";
import gallery3Jpg from "assets/gallery3.jpg";
import gallery4Jpg from "assets/gallery4.jpg";
import gallery5Jpg from "assets/gallery5.jpg";
import gallery6Jpg from "assets/gallery6.jpg";
import gallery7Jpg from "assets/gallery7.jpg";
import gallery8Jpg from "assets/gallery8.jpg";
import gallery9Jpg from "assets/gallery9.jpg";

export const Gallery = () => {
    return (
        <div className={classes.gallery}>
            <div className={classes["gallery__head-block"]}>
                <Text className={classes["gallery__label"]} color="darkGray" size="body1">
                    Share your setup with
                </Text>
                <Text size="h2">#FuniroFurniture</Text>
            </div>
            <div className={classes["gallery__row"]}>
                <div className={classes["gallery__column"]}>
                    <div className={classes["left-gallery"]}>
                        <div
                            className={clsx(
                                classes["left-gallery__content"],
                                classes["left-gallery__content_left"],
                            )}>
                            <div className={classes["left-gallery__row"]}>
                                <div
                                    className={clsx(
                                        classes["left-gallery__column"],
                                        classes["left-gallery__column_1"],
                                    )}>
                                    <LazyImg
                                        url={gallery1Jpg}
                                        className={classes["left-gallery__image-1"]}
                                    />
                                </div>
                                <div
                                    className={clsx(
                                        classes["left-gallery__column"],
                                        classes["left-gallery__column_2"],
                                    )}>
                                    <LazyImg
                                        url={gallery2Jpg}
                                        className={classes["left-gallery__image-2"]}
                                    />
                                </div>
                            </div>
                            <div className={classes["left-gallery__row"]}>
                                <div
                                    className={clsx(
                                        classes["left-gallery__column"],
                                        classes["left-gallery__column_3"],
                                    )}>
                                    <LazyImg
                                        url={gallery3Jpg}
                                        className={classes["left-gallery__image-3"]}
                                    />
                                </div>
                                <div
                                    className={clsx(
                                        classes["left-gallery__column"],
                                        classes["left-gallery__column_4"],
                                    )}>
                                    <LazyImg
                                        url={gallery4Jpg}
                                        className={classes["left-gallery__image-4"]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className={clsx(
                                classes["left-gallery__content"],
                                classes["left-gallery__content_right"],
                            )}>
                            <LazyImg
                                url={gallery5Jpg}
                                className={classes["left-gallery__image-5"]}
                            />
                        </div>
                    </div>
                </div>
                {/* <div className={classes["gallery__column"]}>
                    <div className={classes["center-gallery"]}>
                        <LazyImg
                            url={gallery5Jpg}
                            className={classes["center-gallery__image"]}
                        />
                    </div>
                </div> */}
                <div className={classes["gallery__column"]}>
                    <div className={classes["right-gallery"]}>
                        <div className={classes["right-gallery__row"]}>
                            <div
                                className={clsx(
                                    classes["right-gallery__column"],
                                    classes["right-gallery__column_1"],
                                )}>
                                <LazyImg
                                    url={gallery6Jpg}
                                    className={classes["right-gallery__image-1"]}
                                />
                            </div>
                            <div
                                className={clsx(
                                    classes["right-gallery__column"],
                                    classes["right-gallery__column_2"],
                                )}>
                                <LazyImg
                                    url={gallery7Jpg}
                                    className={classes["right-gallery__image-2"]}
                                />
                            </div>
                        </div>
                        <div className={classes["right-gallery__row"]}>
                            <div
                                className={clsx(
                                    classes["right-gallery__column"],
                                    classes["right-gallery__column_3"],
                                )}>
                                <LazyImg
                                    url={gallery8Jpg}
                                    className={classes["right-gallery__image-3"]}
                                />
                            </div>
                            <div
                                className={clsx(
                                    classes["right-gallery__column"],
                                    classes["right-gallery__column_4"],
                                )}>
                                <LazyImg
                                    url={gallery9Jpg}
                                    className={classes["right-gallery__image-4"]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
