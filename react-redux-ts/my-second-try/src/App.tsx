import React from 'react';
import './styles/App.css';
import AppRoute from './router/AppRoute';
import {Navbar} from "./UI/navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <AppRoute/>
        </div>
    );
}

export default App;
