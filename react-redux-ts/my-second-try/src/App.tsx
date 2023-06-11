import React from 'react';
import './styles/App.css';
import AppRoute from './router/AppRoute';
import {Navbar} from "./UI/navbar/Navbar";

function App() {

    const isAuth = false;

    return (
        <div className="App">
            {isAuth ?? <Navbar/>}
            <AppRoute/>
        </div>
    );
}

export default App;
