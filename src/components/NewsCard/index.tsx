import React from "react";
import { AdaptiveImage } from "ui-kit/Image";
import { Text } from "ui-kit/Text";
import classes from "./NewsCard.module.scss";
import { INewsCardProps } from "./NewsCard.props.interface";

export const NewsCard: React.FC<INewsCardProps> = ({ imgUrl, title, date }) => {
    return (
        <div className={classes["news-card"]}>
            <AdaptiveImage className={classes["news-card__image"]} url={imgUrl} />
            <div className={classes["news-card__body"]}>
                <Text className={classes["news-card__title"]} size="h5">
                    {title}
                </Text>
                <Text color="gray" size="body5">
                    {date}
                </Text>
            </div>
        </div>
    );
};
