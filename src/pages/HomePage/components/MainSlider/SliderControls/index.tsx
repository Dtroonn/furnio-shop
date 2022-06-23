import clsx from "clsx";
import React from "react";

import { SliderArrow } from "ui-kit/SliderArrow";
import classes from "../MainSlider.module.scss";

export const SliderControls: React.FC = () => {
    return (
        <div className={classes["slider-controls"]}>
            <div className={clsx("_container", classes["slider-controls__container"])}>
                <div className={classes["slider-controls__pagination"]}></div>
                <div className={classes["slider-controls__navigation"]}>
                    <SliderArrow
                        direction="left"
                        className={clsx(classes["slider-controls__arrow-prev"])}
                    />
                    <SliderArrow className={clsx(classes["slider-controls__arrow-next"])} />
                </div>
            </div>
        </div>
    );
};
