import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'

export const Navbar = () => {

    const [isAuth, setIsAuth] = useState(true);

    return (
        <div className="navbar">
            <div className="navbar-container">
                {isAuth
                    ?
                    <div className='navbar-pages'>
                        <div className='navbar-main-pages'>
                            <Link to='/' className='navbar-links'>Home</Link>
                            <Link to='/posts' className='navbar-links'>Posts</Link>
                            <Link to='/todo' className='navbar-links'>Todo</Link>
                        </div>
                        <Link to='/out' className='navbar-links navbar-link-out'>Sign out</Link>
                    </div>
                    :
                    <div className="navbar-text navbar-container"> Enter in system! </div>
                }
            </div>
        </div>
    )
}
