import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import{ Layout} from 'antd';
import { useAction } from './hooks/useAction';
import { IUser } from './models/IUser';

function App() {

   const {setUser, setIsAuth} = useAction()
   useEffect(() => {
      if(localStorage.getItem('auth')) {
         setUser({username: localStorage.getItem('username' || '')} as IUser)
         setIsAuth(true)
      }
   }, [])

  return (
    <div className="App">
       <Layout>
          <Navbar/>
          <Layout.Content>
             <AppRouter/>
          </Layout.Content>
       </Layout>
      
    </div>
  );
}

export default App;
