import React from 'react';

export interface IPopupProps {
	open: boolean;
	children: React.ReactNode;
	onClose: () => void;
	contentClassName?: string;
}
