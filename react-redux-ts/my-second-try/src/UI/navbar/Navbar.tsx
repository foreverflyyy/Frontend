import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'

export const Navbar = () => {

    const [isAuth, setIsAuth] = useState(true);

    return (
        <div className="navbar">
            {isAuth
                ?
                <div className="navbar-pages">
                    <Link to='/' className='navbarLinks'>Home</Link>
                    <Link to='/posts' className='navbarLinks'>Posts</Link>
                    <Link to='/todo' className='navbarLinks'>Todo</Link>
                    <Link to='/out' className='navbarLinks out'>Sign out</Link>
                </div>
                :
                <div className="navbar-text"> Enter in system! </div>
            }
        </div>
    )
}
