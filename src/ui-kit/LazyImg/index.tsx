import { useIntersection } from 'hooks/useIntersection';
import React from 'react';
import { AdaptiveImage } from 'ui-kit/Image';
import { ILazyImgProps } from './LazyImg.props';

export const LazyImg: React.FC<ILazyImgProps> = ({ url, className }) => {
	const [isShowImg, setIsShowImg] = React.useState(false);
	const imgRef = React.useRef(null);

	const handleIntersected = (): void => {
		setIsShowImg(true);
	};

	useIntersection({ targetRef: imgRef, onIntersected: handleIntersected });

	return <AdaptiveImage url={isShowImg ? url : ''} ref={imgRef} className={className} />;
};
