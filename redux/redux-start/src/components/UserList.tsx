import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const UserList = () => {

    const {users, loading, error} = useTypedSelector(state => state.user);

  return (
    <div>UserList</div>
  )
}
