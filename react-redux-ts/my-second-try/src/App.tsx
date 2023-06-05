import React from 'react';
import './App.css';
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
