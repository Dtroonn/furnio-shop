import { ISubMenuItem } from '../SubMenu/SubMenuItem.interface';

export interface IMenuItemProps {
	title: string;
	src: string;
	items?: ISubMenuItem[];
}
