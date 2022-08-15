import clsx from 'clsx';
import React from 'react';
import { CircularProgress } from 'ui-kit/CircularProgress';

import classes from './Button.module.scss';

const colorsClasses = {
	orange: classes['button_orange'],
	white: classes['button_white'],
	red: classes['button_red'],
};

const sizesClasses = {
	big: classes['button_big'],
	medium: classes['button_medium'],
};

interface IButtonProps {
	className?: string;
	color?: keyof typeof colorsClasses;
	type?: 'button' | 'submit';
	size?: keyof typeof sizesClasses;
	fullWidth?: boolean;
	outline?: boolean;
	loading?: boolean;
	onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
	onClick,
	color = 'orange',
	className,
	children,
	type = 'button',
	size = 'medium',
	fullWidth,
	outline,
	loading,
}) => {
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={loading}
			className={clsx(classes.button, colorsClasses[color], sizesClasses[size], className, {
				[classes['button_fullWidth']]: fullWidth,
				[classes['button_outline']]: outline,
			})}
		>
			{loading ? <CircularProgress color={color === 'white' ? 'orange' : 'white'} /> : children}
		</button>
	);
};
