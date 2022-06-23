import React from "react";
import { Header } from "components/Header";
import { HomePage } from "pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
