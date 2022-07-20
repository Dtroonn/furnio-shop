import React from 'react';
import { Header } from 'components/Header';
import { HomePage } from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Footer } from 'components/Footer';
import { Button } from 'ui-kit/Button';

function App() {
	const [isLoading, setIsLoading] = React.useState(false);
	const [lalka, setLalka] = React.useState();

	const handleClick = async () => {
		console.log('LOADING PRI VHODE V FUNC', isLoading);
		setIsLoading((prev) => !prev);
		//@ts-ignore
		setLalka(isLoading);
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(true);
			}, 1000);
		});
		console.log('AFTER SET STATE:', isLoading);
	};

	console.log('LALKA', lalka);
	console.log(isLoading);

	return (
		<div className="App">
			<Header />
			<Button onClick={handleClick}>жми КНОПКА</Button>
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
