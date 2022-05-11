import { IMenuItem } from "./MenuItem.interface";

export interface IMenuItemProps {
    title: string;
    src: string;
    items?: IMenuItem[];
}