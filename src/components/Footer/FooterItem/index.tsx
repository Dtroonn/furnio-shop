import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'ui-kit/Accordion';
import { Text } from 'ui-kit/Text';
import classes from '../Footer.module.scss';
import { IFooterItemLink, IFooterItemProps } from './FooterItem.props.interface';

const LinkItem: React.FC<IFooterItemLink> = ({ name, to }) => {
	return (
		<Link to={to} className={clsx(classes['footer-item__item'], classes['footer-item__item_link'])}>
			<Text size="body4" color="darkGray">
				{name}
			</Text>
		</Link>
	);
};

export const FooterItem: React.FC<IFooterItemProps> = ({ title, items, isMd4 }) => {
	const linkItems = items.map((item, index) => (
		<LinkItem key={index} to={item.to} name={item.name} />
	));

	return (
		<div className={classes['footer-item']}>
			{!isMd4 && <div className={classes['footer-item__title']}>{title}</div>}
			{isMd4 ? <Accordion title={title}>{linkItems}</Accordion> : linkItems}
		</div>
	);
};
