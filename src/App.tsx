import React from 'react';
import { Header } from 'components/Header';
import { HomePage } from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Footer } from 'components/Footer';
import { useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil';
import { authUserState } from 'recoil/auth/states/authUser.state';
import { MainLoader } from 'components/MainLoader';
import { GetParameterPopups } from 'components/GetParameterPopups';
import { useFetchActivitiesInfoTask } from 'recoil/auth/tasks/useFetchActivitiesInfo.task';
import { CartPage } from 'pages/CartPage';
import { ResetRecoilAndMountTreeContext } from 'recoil/ResetRecoilAndMountTreeProvider';

const App: React.FC = () => {
	// const [lalka, setLalka] = React.useState();
	const [userLoadable, setAuthUserState] = useRecoilStateLoadable(authUserState);
	const fetchActivitiesInfo = useFetchActivitiesInfoTask();
	const [isLoading, setIsLoading] = React.useState(false);

	const { user: userFromRecoilContext } = React.useContext(ResetRecoilAndMountTreeContext);

	React.useEffect(() => {
		if (userLoadable.state === 'hasValue') {
			setAuthUserState(userFromRecoilContext || userLoadable.contents);
			fetchActivitiesInfo();
		}
	}, [userFromRecoilContext, userLoadable.state]);

	if (userLoadable.state === 'loading') {
		return <MainLoader />;
	}

	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
				</Routes>
			</main>
			<Footer />
			<GetParameterPopups />
		</div>
	);
};

export default App;
