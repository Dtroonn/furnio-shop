import React from 'react';
import classes from './Badge.module.scss';

//Компонент пока что будет отображать только справа вверху
//пока что будет просто оранжевого цвета
//без проблем можно расширить
export const Badge: React.FC<{ content?: React.ReactNode }> = ({ children, content }) => {
	return (
		<div className={classes.badge}>
			{children}
			{content !== undefined && content !== null && (
				<div className={classes.badge__item}>{content}</div>
			)}
		</div>
	);
};
