export interface IFooterItemLink {
    name: string;
    to: string;
}

export interface IFooterItemProps {
    title: string;
    items: IFooterItemLink[];
    isMd4?: boolean;
}
