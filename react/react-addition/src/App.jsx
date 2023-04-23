import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreatePost from './post/CreatePost';
import { RequireAuth } from './hok/RequireAuth';
import UserLogin from './Login';
import PostId from './post/PostId';
import Posts from './post/Posts';
import Navbar from './Navbar';
import './css/App.css'
import { AuthProvider } from './hok/AuthProvider';
import About from './About';

function App() {
   
  return (
     <div className='App'>
        <AuthProvider>
           <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Navbar/>}>
                     <Route path="login" element={<UserLogin/>}/>
                     <Route path="about/*" element={<About/>}>
                        <Route path="contacts" element={<h3>Info about contacts:</h3>}/>
                        <Route path="form" element={<h3>Info about form:</h3>}/>
                     </Route>
                     <Route path='posts/:id' element={<PostId/>}/>
                     <Route path='posts' element={<Posts/>}/>
                     <Route path='posts/new' element={
                        <RequireAuth>
                           <CreatePost/>
                        </RequireAuth>
                     }/>
                     <Route path='posts/post-create' element={<CreatePost/>}/>
                     <Route path="*" element={<UserLogin/>}/>
                  </Route>
               </Routes>
            </BrowserRouter>
        </AuthProvider>
   </div>
  );
}

export default App;
