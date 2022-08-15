import React from 'react';

import clsx from 'clsx';
import CSSTransition from 'react-transition-group/CSSTransition';
import classes from './Popup.module.scss';
import Portal from '../../Portal';
import { IPopupProps } from './Popup.props';

const Popup: React.FC<IPopupProps> = ({ children, open, onClose, contentClassName }) => {
	const popupRef = React.useRef(null);

	React.useEffect(() => {
		const bodyElem = document.body;

		const bodyWidth = bodyElem.clientWidth;
		const windowWidth = window.innerWidth;
		const scrollbarWidth = windowWidth - bodyWidth;

		if (open && scrollbarWidth) {
			bodyElem.style.overflow = 'hidden';
			bodyElem.style.paddingRight = `${scrollbarWidth}px`;
		}

		let timerId: NodeJS.Timeout;

		if (!open) {
			timerId = setTimeout(() => {
				bodyElem.style.overflow = 'auto';
				bodyElem.style.paddingRight = '0';
			}, 300);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [open]);

	return (
		<CSSTransition
			unmountOnExit
			nodeRef={popupRef}
			in={open}
			appear={true}
			timeout={300}
			classNames={{
				appear: clsx(classes.popup, classes.enter),
				appearActive: clsx(classes.popup, classes['enter-active']),
				appearDone: clsx(classes.popup, classes['enter-done']),
				enter: clsx(classes.popup, classes.enter),
				enterActive: clsx(classes.popup, classes['enter-active']),
				enterDone: clsx(classes.popup, classes['enter-done']),
				exit: clsx(classes.popup, classes.exit),
				exitActive: clsx(classes.popup, classes['exit-active']),
			}}
		>
			<Portal>
				<div ref={popupRef}>
					<div onClick={onClose} className={classes.popup__overlay} />
					<div className={clsx(classes.popup__content, contentClassName)}>{children}</div>
				</div>
			</Portal>
		</CSSTransition>
	);
};

export default Popup;
