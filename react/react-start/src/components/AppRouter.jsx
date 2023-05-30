import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import { PostIdPage } from '../pages/PostIdPage'
import Login from '../pages/Login'
import { AuthContext } from '../context'

export default function AppRouter() {

    const {isAuth} = useContext(AuthContext);

  return (
    isAuth
        ? 
        <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/posts/:id' element={<PostIdPage/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
        :
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path="/*" element={<Login/>}/>
        </Routes>
  )
}
