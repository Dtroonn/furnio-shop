import { LoginPopup } from 'components/LoginPopup';
import { useGetParameter } from 'hooks/useGetParameter';
import { usePrevious } from 'hooks/usePrevious';
import React from 'react';
import { GET_POPUPS_ENUMS, GET_POPUPS_PARAMS } from './parameterPopups.config';

const popups = {
	[GET_POPUPS_ENUMS.popup.signIn]: LoginPopup,
};

export const GetParameterPopups: React.FC = () => {
	const popupName = useGetParameter(GET_POPUPS_PARAMS.popup);
	const prevPopupName = usePrevious(popupName);

	if (!prevPopupName && !popupName) {
		return null;
	}

	//Если нет никаких попапов, то отображаем прошлый, чтобы была анимация закрытия
	//Если есть, то просто монтируем новый
	const Component =
		prevPopupName && !popupName ? popups[prevPopupName] : popups[popupName as string];

	if (!Component) {
		return null;
	}

	return <Component open={Boolean(popupName)} />;
};
