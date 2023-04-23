import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAction } from '../hook/userAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';

const UserList: React.FC = () => {
  
   const {fetchUsers} = useAction()
  const {users, error, loading } = useTypedSelector(state => state.user)
  
   useEffect(() => {
      fetchUsers()
   }, [])
   if(loading) {
      return <h1>Wait please!!!</h1>
   }
   if(error) {
      return <h1>Sorry, you have problems :(</h1>
   }

  return <div>
      {users.map(user =>
         <div>{user.id}. {user.name} live in country.</div>
      )}
  </div>;
}
export default UserList