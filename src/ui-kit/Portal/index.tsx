import React from 'react';
import ReactDOM from 'react-dom';
import { IPortalProps } from './Portal.props';

const Portal: React.FC<IPortalProps> = ({ children }) => {
	const [container] = React.useState<HTMLDivElement>(() => document.createElement('div'));

	React.useEffect(() => {
		document.body.appendChild(container);

		return () => {
			document.body.removeChild(container);
		};
	}, []);

	return ReactDOM.createPortal(children, container);
};

export default Portal;
