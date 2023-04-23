//json-server --watch db.json --port 5000

import React, { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
//import { useAppDispatch, useAppSelector } from './hook/redux';
//import { fetchUsers } from './store/reducers/actionCreators';
//import UserSlice, { userSlice } from './store/reducers/UserSlice';

function App() {
   //const dispatch = useAppDispatch()
   //const {users, isLoading, error} = useAppSelector(state => state.userReducer)

   //useEffect(() => {
   //   dispatch(fetchUsers())
   //}, [])

  return (
    <div className="App">
       {/*{isLoading && <h1>Wait please...</h1>}
       {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}*/}
      <PostContainer/>
    </div>
  );
}

export default App;
