import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";

import bedImage from "assets/bed.jpg";

import classes from "./MainSlider.module.scss";
import "./MainSlider.scss";
import clsx from "clsx";
import { Text } from "ui-kit/Text";
import { AdaptiveImage } from "ui-kit/Image";
import { Button } from "ui-kit/Button";
import { Link } from "react-router-dom";
import { Icon } from "ui-kit/Icon";
import { useBreakpoint } from "hooks/useBreakpoint";
import { breakpointsTypes } from "common/constans";
import { SliderControls } from "./SliderControls";

export const MainSlider: React.FC = () => {
    const isMd2 = useBreakpoint("max-width", breakpointsTypes.md2);

    return (
        <section className={classes["main-slider"]}>
            <div className={classes["main-slider__content"]}>
                <div className={clsx("_container", classes["content-block-container"])}>
                    <div className={classes["content-block-container__content"]}>
                        <Text className={classes["content-block-container__title"]}>
                            High-Quality Furniture Just For You
                        </Text>

                        <div className={classes["content-block-container__subtitle"]}>
                            Our furniture is made from selected and best quality materials that are
                            suitable for your dream home
                        </div>
                        {!isMd2 && (
                            <Link
                                to="/products"
                                className={classes["content-block-container__btn-link"]}>
                                <Button
                                    size="big"
                                    fullWidth
                                    className={classes["content-block-container__btn"]}>
                                    Shop Now
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className={classes["main-slider__body"]}>
                <SliderControls />
                <div className={clsx("_container", classes["main-slider__slider-container"])}>
                    <div className={classes["slider-main"]}>
                        <Swiper
                            observeParents
                            observer
                            modules={[Navigation, Pagination, Autoplay]}
                            pagination={{
                                clickable: true,
                                el: `.${classes["slider-controls__pagination"]}`,
                            }}
                            navigation={{
                                nextEl: `.${classes["slider-controls__arrow-next"]}`,
                                prevEl: `.${classes["slider-controls__arrow-prev"]}`,
                                disabledClass: "disabled",
                            }}
                            slidesPerView={1}
                            loop
                            autoplay={{
                                disableOnInteraction: false,
                            }}
                            loopAdditionalSlides={5}
                            // loopedSlides={4}
                            watchOverflow
                            speed={800}
                            breakpoints={{
                                [breakpointsTypes.md2]: {
                                    spaceBetween: 32,
                                },
                                [breakpointsTypes.md3]: {
                                    spaceBetween: 22,
                                },
                            }}
                            className={clsx(classes["slider-main__slider"], "slider-main")}>
                            {Array(4)
                                .fill(0)
                                .map((_, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className={classes["slider-main__slide"]}>
                                        <AdaptiveImage
                                            className={classes["slider-main__image"]}
                                            url={bedImage}
                                        />
                                        <Link
                                            to="/product"
                                            className={clsx(
                                                classes["slider-main__content"],
                                                "slider-main__content",
                                            )}>
                                            <Text
                                                className={classes["slider-main__title"]}
                                                size="h4">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing
                                                elit. Alias impedit minima culpa accusamus neque
                                                tempora, maiores voluptates laborum! Exercitationem
                                                atque doloribus expedita quibusdam ab aut.
                                            </Text>
                                            <Text
                                                color="darkGray"
                                                className={classes["slider-main__text"]}
                                                size="body3">
                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                elit. Expedita, architecto eaque. Iusto repellendus
                                                quod nostrum pariatur voluptatum, voluptatibus
                                                tempora quia?
                                            </Text>
                                            <div
                                                className={classes["slider-main__price-and_arrow"]}>
                                                <Text
                                                    className={classes["slider-main__price"]}
                                                    size="body1">
                                                    Rp 17.000.000
                                                </Text>
                                                <Icon icon="arrow-link" />
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            {isMd2 && (
                <Link to="/products" className={classes["content-block-container__btn-link"]}>
                    <Button
                        fullWidth
                        size="big"
                        className={classes["content-block-container__btn"]}>
                        Shop Now
                    </Button>
                </Link>
            )}
        </section>
    );
};
