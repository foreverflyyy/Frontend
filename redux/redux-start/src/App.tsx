import './App.css';
import {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import { PostList } from './components/PostList';

export const App = () =>  {

  // const {users, isLoading, error} = useAppSelector(state => state.user);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  // if(error !== ''){
  //   return (
  //     <div style={{color: 'red'}}>{error}</div>
  //   )
  // }

  return (
    <div className="App">
      {/* {isLoading 
        ? <div style={{color: 'grey', fontSize: 20}}>Please wait...</div>
        : users.map(user => 
            <div>{user.name}. {user.email}</div>)
      } */}

      <PostList/>
    </div>
  );
}
