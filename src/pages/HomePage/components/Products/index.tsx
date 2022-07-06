import clsx from "clsx";
import { Product } from "components/Product";
import React from "react";

import { Text } from "ui-kit/Text";

import classes from "./Products.module.scss";

import roomPng from "assets/room.png";
import bedjpg from "assets/bed.jpg";
import { Button } from "ui-kit/Button";

const mockItems = [
    {
        imgUrl: bedjpg,
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: 292191293.22,
    },
    {
        imgUrl: roomPng,
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: 292191293.22,
        oldPrice: 121312,
    },
    {
        imgUrl: roomPng,
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: 292191293.22,
    },
    {
        imgUrl: roomPng,
        name: "Syltherine",
        description: "Stylish cafe chair Stylish cafe chair Stylish cafe chair Stylish",
        price: 292191293.22,
        oldPrice: 1213123123132,
    },
    {
        imgUrl: roomPng,
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: 292191293.22,
    },
    {
        imgUrl: roomPng,
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: 292191293.22,
        oldPrice: 1213123123132,
    },
];

export const Products = () => {
    return (
        <div className={clsx(classes.products)}>
            <div className="_container">
                <Text className={classes["products__title"]} size="h2">
                    Our Products
                </Text>

                <div className={classes["products__row"]}>
                    {mockItems.map((product, index) => (
                        <div key={index} className={classes["products__column"]}>
                            <Product
                                imgUrl={product.imgUrl}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                oldPrice={product.oldPrice}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Button outline color="white" className={clsx(classes["products__btn"])}>
                Show More
            </Button>
        </div>
    );
};
