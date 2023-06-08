import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'
import {useAppSelector} from "../../store/store";
import {useActions} from "../../store/actions";

export const Navbar = () => {

    const {isAuth} = useAppSelector(state => state.auth);
    const {signOut} = useActions();

    const handlerSignOut = (event: React.MouseEvent) => {
        event.preventDefault();
        signOut();
    }

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
                        <div onClick={handlerSignOut} className='navbar-links navbar-link-out'>
                            Sign out
                        </div>
                    </div>
                    :
                    <div className="navbar-asking"> Enter in system! </div>
                }
            </div>
        </div>
    )
}
