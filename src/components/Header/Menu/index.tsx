import clsx from 'clsx';
import React from 'react';
import { MenuIcon } from 'ui-kit/icons/MenuIcon';

import classes from './Menu.module.scss';
import { MenuItem } from './MenuItem';
import { IMenuItemProps } from './MenuItem/MenuItem.props.interface';

const menuItems: IMenuItemProps[] = [
	{
		title: 'Products',
		src: '/products',
		items: [
			{ title: 'Подпункт 1', src: '' },
			{ title: 'Подпункт 2', src: '' },
			{ title: 'Подпункт 3', src: '' },
			{ title: 'Подпункт 4', src: '' },
		],
	},
	{
		title: 'Rooms',
		src: '',
		items: [
			{ title: 'Подпункт 1', src: '' },
			{ title: 'Подпункт 2', src: '' },
		],
	},
	{
		title: 'Inspirations',
		src: '',
	},
];

export const Menu: React.FC = () => {
	const [openBurger, setOpenBurger] = React.useState(false);

	const toggleOpenBurger = () => {
		setOpenBurger((prev) => !prev);
	};

	return (
		<div className={classes.menu}>
			<div
				onClick={toggleOpenBurger}
				style={{ position: 'relative', zIndex: 4 }}
				className={classes['menu__icon-wrapper']}
			>
				<MenuIcon active={openBurger} />
			</div>

			<div
				className={clsx(classes['menu__body-wrapper'], {
					[classes['menu__body-wrapper_active']]: openBurger,
				})}
			>
				<nav className={classes.menu__body}>
					<ul className={classes.menu__list}>
						{menuItems.map((item, index) => (
							<MenuItem key={index} title={item.title} src={item.src} items={item.items} />
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};
