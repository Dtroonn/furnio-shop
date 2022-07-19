import { IFooterItemProps } from "./FooterItem/FooterItem.props.interface";

export const items: IFooterItemProps[] = [
    {
        title: "Menu",
        items: [
            {
                name: "Products",
                to: "/",
            },
            {
                name: "Rooms",
                to: "/",
            },
            {
                name: "Inspirations",
                to: "/",
            },
            {
                name: "About Us",
                to: "/",
            },
            {
                name: "Terms & Policy",
                to: "/",
            },
        ],
    },
    {
        title: "Account",
        items: [
            {
                name: "My Account",
                to: "/",
            },
            {
                name: "Checkout",
                to: "/",
            },
            {
                name: "My Cart",
                to: "/",
            },
            {
                name: "My catalog",
                to: "/",
            },
        ],
    },
    {
        title: "Stay Connected",
        items: [
            {
                name: "Facebook",
                to: "/",
            },
            {
                name: "Instagram",
                to: "/",
            },
            {
                name: "Twitter",
                to: "/",
            },
        ],
    },
];