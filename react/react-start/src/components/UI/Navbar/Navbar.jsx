import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cl from './Navbar.module.css'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton';

export default function Navbar() {

  const {setIsAuth} = useContext(AuthContext);

  const logout = event => {
    event.preventDefault();
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className={cl.navbar}>
      <MyButton onClick={logout}>Sign out</MyButton>
      <Link to='/posts' className={cl.navbarLinks}>Posts</Link>
      <Link to='/about' className={cl.navbarLinks}>About</Link>
    </div>
  )
}
