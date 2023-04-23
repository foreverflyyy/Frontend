import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hook/useAuth'

const CreatePost = () => {
   const navigate = useNavigate()
   const {signout} = useAuth()
  return (
    <div>
       <button onClick={() => signout(() => navigate('/login', {replace: true}))}>Log out</button>
    </div>
  )
}

export default CreatePost