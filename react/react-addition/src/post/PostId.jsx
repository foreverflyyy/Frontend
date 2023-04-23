import React from 'react'
import { useParams } from 'react-router-dom'

const PostId = () => {
   const {id} = useParams()
  return (
    <div>
       {id}
    </div>
  )
}

export default PostId