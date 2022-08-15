import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ResetRecoilAndMountTreeProvider } from 'recoil/ResetRecoilAndMountTreeProvider';
import { store } from 'redux/store';
import { Button } from 'ui-kit/Button';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

ReactDOM.render(
	<BrowserRouter>
		<ResetRecoilAndMountTreeProvider>
			<App />
		</ResetRecoilAndMountTreeProvider>
	</BrowserRouter>,

	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
