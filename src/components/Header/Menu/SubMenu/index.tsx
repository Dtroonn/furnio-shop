import React from 'react';

import classes from '../Menu.module.scss';
import { Link } from 'react-router-dom';
import { ISubMenuProps } from './SubMenu.props.interface';

export const SubMenu: React.FC<ISubMenuProps> = ({ items }) => {
	return (
		<ul className={classes['sub-menu-list']}>
			{items.map((item, index) => (
				<li key={index}>
					<Link to={item.src} className={classes['sub-menu-list__link']}>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	);
};
