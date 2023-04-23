import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import '../css/Link.css'

const Posts = () => {
   const [posts, setPosts] = useState([])
   const [postParams, setPostParams] = useSearchParams()

   const postQuery = postParams.get('post') || ''
   const latest = postParams.has('latest')

   const startForms = latest ? 80 : 1

   const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      const post = form.search.value
      const latest = form.latest.checked
      const params = {}
      if(latest) params.latest = latest
      if(post.length) params.post = post
      setPostParams(params)
   }
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
   }, [])
  return (
    <div className='Link'>
       <form autoComplete='off' onSubmit={handleSubmit}>
          <input type="search" name="search"/>
          <label><input type="checkbox" name="latest"/>Only new</label>
          <input type="submit" value="search"/>
       </form>
       <Link to="/posts/new">New post</Link>
       {posts.filter(post => post.title.includes(postQuery) && post.id >= startForms).map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}><li>{post.title}</li></Link>
       ))}
    </div>
  )
}

export default Posts