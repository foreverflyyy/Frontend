import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './hook/useAuth'

const UserLogin = () => {
   const location = useLocation()
   const navigate = useNavigate()
   const {signin} = useAuth()

   const fromPage = location.state?.from?.pathname || '/'
   const handlerUser = (event) => {
      event.preventDefault()
      const form = event.target
      const user = form.name
      signin(user, () => navigate(fromPage, {replace: true}))
   }
  return (
    <div>
       <h1>Login page</h1>
       <form onSubmit={handlerUser}>
          <label>Name: <input name="name"/></label>
          <button type="submit">Sign in</button>
       </form>
    </div>
  )
}

export default UserLogin