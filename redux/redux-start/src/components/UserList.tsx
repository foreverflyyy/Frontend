import React, { useEffect }from 'react'
import { useAppSelector } from '../hooks/redux'
import { useAppDispatch } from '../hooks/redux'

export const UserList: React.FC = () => {

  const {} = useAppSelector(state => state.user)
  const {} = useAppDispatch();

  useEffect(() => {
    
  }, []);

  return (
    <div>UserList</div>
  )
}
