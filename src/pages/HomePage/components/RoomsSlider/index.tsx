import clsx from "clsx";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";

import { Button } from "ui-kit/Button";

import { Text } from "ui-kit/Text";
import classes from "./RoomsSlider.module.scss";
import { breakpointsTypes } from "common/constans";
import { AdaptiveImage } from "ui-kit/Image";
import { Link } from "react-router-dom";

import "./RoomsSlider.scss";
import sliderRoomPng from "assets/sliderRoom.png";
import { SliderArrow } from "ui-kit/SliderArrow";
import { Icon } from "ui-kit/Icon";
import { useBreakpoint } from "hooks/useBreakpoint";

export const RoomsSlider = () => {
    const isMd1 = useBreakpoint("max-width", 1288);

    return (
        <div className={classes["rooms-slider"]}>
            <div className={clsx("_container", classes["rooms-slider__container"])}>
                <div className={classes["rooms-slider__content"]}>
                    <div className={classes["rooms-slider__body"]}>
                        <Text size="h2" className={classes["rooms-slider__title"]}>
                            50+ Beautiful rooms inspiration
                        </Text>
                        <Text size="body3" className={classes["rooms-slider__subtitle"]}>
                            Our designer already made a lot of beautiful prototipe of rooms that
                            inspire you
                        </Text>
                        {!isMd1 && <Button>Explore More</Button>}
                    </div>
                </div>
                <div className={classes["slider-rooms"]}>
                    <Swiper
                        simulateTouch={false}
                        observeParents
                        observer
                        modules={[Navigation, Pagination]}
                        pagination={{
                            clickable: true,
                            el: ".slider-rooms__pagination",
                        }}
                        navigation={{
                            nextEl: `.${classes["slider-rooms__arrow_next"]}`,
                            prevEl: `.${classes["slider-rooms__arrow_prev"]}`,
                            disabledClass: "disabled",
                        }}
                        slidesPerView={1}
                        loop
                        // autoplay={{
                        //     disableOnInteraction: false,
                        // }}
                        // // loopedSlides={3}
                        loopAdditionalSlides={4}
                        // loopedSlides={4}
                        watchOverflow
                        speed={800}
                        breakpoints={{
                            404: {
                                spaceBetween: 24,
                            },
                        }}
                        className={clsx(classes["slider-rooms__slider"], "slider-rooms")}>
                        {Array(4)
                            .fill(0)
                            .map((_, index) => (
                                <SwiperSlide key={index} className={classes["slider-rooms__slide"]}>
                                    <AdaptiveImage
                                        className={clsx(
                                            classes["slider-rooms__image"],
                                            "slider-rooms__image",
                                        )}
                                        url={sliderRoomPng}
                                    />
                                    <div
                                        className={clsx(
                                            classes["slide-content"],
                                            "slider-rooms__slide-content",
                                        )}>
                                        <div className={classes["slide-content__body"]}>
                                            <Text
                                                size="body3"
                                                className={classes["slide-content__label"]}
                                                color="darkGray">
                                                {index + 1} <span></span> Bed Room
                                            </Text>
                                            <Text
                                                size="h4"
                                                className={classes["slide-content__title"]}>
                                                Inner Peace
                                            </Text>
                                        </div>
                                        <Button className={classes["slide-content__btn"]}>
                                            <Icon
                                                icon="arrow-link"
                                                className={classes["slide-content__arrow-icon"]}
                                            />
                                        </Button>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                    <div className={classes["slider-rooms__controls"]}>
                        <div
                            className={clsx(
                                "slider-rooms__pagination",
                                classes["slider-rooms__pagination"],
                            )}></div>

                        <div className={classes["slider-rooms__navigation"]}>
                            <SliderArrow
                                direction="left"
                                color={isMd1 ? "orange" : "white"}
                                className={clsx(
                                    classes["slider-rooms__arrow"],
                                    classes["slider-rooms__arrow_prev"],
                                )}
                            />
                            <SliderArrow
                                color={isMd1 ? "orange" : "white"}
                                className={clsx(
                                    classes["slider-rooms__arrow"],
                                    classes["slider-rooms__arrow_next"],
                                )}
                            />
                        </div>
                    </div>
                </div>
                {isMd1 && <Button>Explore More</Button>}
            </div>
        </div>
    );
};
