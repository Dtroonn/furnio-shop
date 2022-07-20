import React, { SyntheticEvent } from 'react';

import { Icon } from 'ui-kit/Icon';

import { IMenuItemProps } from './MenuItem.props.interface';

import classes from '../Menu.module.scss';
import { Link } from 'react-router-dom';
import { Md2Headercontext } from 'components/Header';
import { SubMenu } from '../SubMenu';
import { SlideToggle } from 'ui-kit/SlideToggle';
import clsx from 'clsx';

export const MenuItem: React.FC<IMenuItemProps> = ({ title, src, items }) => {
	const isMd2 = React.useContext(Md2Headercontext);
	const [openSubMenu, setOpenSubMenu] = React.useState(false);

	const handleClickArrow = (e: SyntheticEvent): void => {
		setOpenSubMenu((prev) => !prev);
		e.stopPropagation();
		e.preventDefault();
	};

	return (
		<li>
			<Link to={src} className={classes['menu__link']}>
				<span>{title}</span>
				{items && (
					<div
						onClick={isMd2 ? handleClickArrow : undefined}
						className={clsx(classes['menu__icon-arrow-wrapper'], {
							[classes.active]: openSubMenu,
						})}
					>
						<Icon className={classes.menu__arrow} icon="arrow-down" />
					</div>
				)}
			</Link>
			{items &&
				(isMd2 ? (
					<SlideToggle open={openSubMenu}>
						<SubMenu items={items} />
					</SlideToggle>
				) : (
					<SubMenu items={items} />
				))}
		</li>
	);
};
