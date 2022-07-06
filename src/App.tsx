import React from "react";
import { Header } from "components/Header";
import { HomePage } from "pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Footer } from "components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
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
