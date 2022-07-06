import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Text } from "ui-kit/Text";
import classes from "./TipsAndTricks.module.scss";
import clsx from "clsx";
import { NewsCard } from "components/NewsCard";

import tipJpg from "assets/TipImg.jpg";
import { Link } from "react-router-dom";
import { breakpointsTypes } from "common/constans";
import { SliderArrow } from "ui-kit/SliderArrow";

export const TipsAndTricks = () => {
    const data = [
        { imgUrl: tipJpg, title: "How to create a living room to love", date: "20 jan 2020" },
        { imgUrl: tipJpg, title: "Solution for clean look working space", date: "20 jan 2020" },
        {
            imgUrl: tipJpg,
            title: "Make your cooking activity more fun with good setup",
            date: "20 jan 2020",
        },
        {
            imgUrl: tipJpg,
            title: "Make your cooking activity more fun with good setup",
            date: "20 jan 2020",
        },
    ];

    return (
        <div className={classes["tips-and-tricks"]}>
            <div className={clsx("_container", classes["tips-and-tricks__container"])}>
                <Text className={classes["tips-and-tricks__title"]} size="h2">
                    Tips & Tricks
                </Text>
                <div className={classes["tips-and-tricks-slider"]}>
                    <Swiper
                        simulateTouch={false}
                        observeParents
                        observer
                        modules={[Navigation, Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                            el: `.${classes["tips-and-tricks-slider__pagination"]}`,
                        }}
                        navigation={{
                            nextEl: `.${classes["tips-and-tricks-slider__arrow_next"]}`,
                            prevEl: `.${classes["tips-and-tricks-slider__arrow_prev"]}`,
                        }}
                        slidesPerView={3}
                        loop
                        autoplay={{
                            disableOnInteraction: false,
                        }}
                        loopAdditionalSlides={4}
                        watchOverflow
                        speed={800}
                        onBreakpoint={(swiper) => {
                            swiper.pagination.render();
                            swiper.pagination.update();
                        }}
                        breakpoints={{
                            [breakpointsTypes.md1]: {
                                spaceBetween: 32,
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                                centeredSlides: true,
                            },
                            [breakpointsTypes.md2]: {
                                spaceBetween: 18,
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                                centeredSlides: true,
                            },
                            [breakpointsTypes.md3]: {
                                spaceBetween: 26,
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                                centeredSlides: false,
                            },
                            [breakpointsTypes.md4]: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                                centeredSlides: false,
                                spaceBetween: 10,
                            },
                            0: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                centeredSlides: false,
                                spaceBetween: 0,
                            },
                        }}
                        className={clsx(classes["tips-and-tricks-slider__slider"])}>
                        {data.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className={classes["tips-and-tricks-slider__slide"]}>
                                {({ isActive }) => (
                                    <Link
                                        to="/tip"
                                        className={clsx(classes["tips-and-tricks-slider__link"], {
                                            [classes["tips-and-tricks-slider__link_active"]]:
                                                isActive,
                                        })}>
                                        <NewsCard key={index} {...item} />
                                    </Link>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={classes["tips-and-tricks-slider__controls"]}>
                        <div className={classes["tips-and-tricks-slider__navigation"]}>
                            <SliderArrow
                                color="white"
                                className={clsx(
                                    classes["tips-and-tricks-slider__arrow"],
                                    classes["tips-and-tricks-slider__arrow_prev"],
                                )}
                            />
                            <SliderArrow
                                color="white"
                                className={clsx(
                                    classes["tips-and-tricks-slider__arrow"],
                                    classes["tips-and-tricks-slider__arrow_next"],
                                )}
                            />
                        </div>
                        <div className={clsx(classes["tips-and-tricks-slider__pagination"])}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
