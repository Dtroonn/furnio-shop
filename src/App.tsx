import React from 'react';
import { Header } from 'components/Header';
import { HomePage } from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Footer } from 'components/Footer';
import { Button } from 'ui-kit/Button';
import { authenticateByOAuth, fetchCheckAuth } from 'redux/ducks/auth/thunks';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { authUserState } from 'recoil/auth/states/authUser.state';
import { useAuthenticateByOAuthTask } from 'recoil/auth/tasks/useAuthenticateByOAuth.task';
import { MainLoader } from 'components/MainLoader';

function App() {
	const [isLoading, setIsLoading] = React.useState(false);
	// const [lalka, setLalka] = React.useState();
	const userLoadble = useRecoilValueLoadable(authUserState);
	const authenticateByOAuth = useAuthenticateByOAuthTask();

	// const dispatch = useAppDispatch();

	// const handleClick = () => {
	// 	console.log('LOADING PRI VHODE V FUNC', isLoading);
	// 	setIsLoading((prev) => !prev);
	// 	// await new Promise((resolve, reject) => {
	// 	// 	setTimeout(() => {
	// 	// 		resolve(true);
	// 	// 	}, 1000);
	// 	// });
	// 	console.log('AFTER SET STATE:', isLoading);
	// 	setIsLoading((prev) => {
	// 		console.log('AFTER SET STATE IN SET STATE WITH PREV:', prev);
	// 		return prev;
	// 	});
	// };

	// console.log('LALKA', lalka);
	// console.log(isLoading);

	const onOAuthVkClick = async (): Promise<void> => {
		// dispatch(authenticateByOAuth('http://localhost:7777/api/users/vk-oauth'));
		authenticateByOAuth('http://localhost:7777/api/users/vk-oauth');
	};

	// React.useEffect(() => {
	// 	dispatch(fetchCheckAuth());
	// }, []);

	if (userLoadble.state === 'loading') {
		return <MainLoader />;
	}

	return (
		<div className="App">
			<Header />
			{/* <Button onClick={handleClick}>жми КНОПКА</Button> */}
			<Button onClick={onOAuthVkClick}>Авторизоваться через VK</Button>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
