import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import Todo from '../pages/Todo';

const AppRouter = () => {
  return (
    <Routes>
        {/* <Route path='/' element={<Home/>}> */}
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/todo' element={<Todo/>}/>
        {/* </Route> */}
    </Routes>
  )
}

export default AppRouter;