import React from 'react';
import { Header } from 'components/Header';
import { HomePage } from 'pages/HomePage';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <HomePage />
            </div>
        </div>
    );
}

export default App;
