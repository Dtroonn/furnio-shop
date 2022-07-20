import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from 'ui-kit/Text';
import classes from '../Footer.module.scss';
import { IFooterItemProps } from './FooterItem.props.interface';

export const FooterItem: React.FC<IFooterItemProps> = ({ title, items }) => {
	return (
		<div className={classes['footer-item']}>
			<div className={classes['footer-item__title']}>{title}</div>
			{items.map((item) => (
				<Link
					to={item.to}
					className={clsx(classes['footer-item__item'], classes['footer-item__item_link'])}
				>
					<Text size="body4" color="darkGray">
						{item.name}
					</Text>
				</Link>
			))}
		</div>
	);
};
