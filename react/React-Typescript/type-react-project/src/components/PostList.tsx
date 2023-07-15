import React from 'react'
import PostItem, { IPostInfo } from './PostItem'

interface IPostListProps {
    posts: IPostInfo[];
}

export default function PostList({posts}: IPostListProps) {
  return (
    <div className='postsList'>
      {posts?.map(post => 
        <PostItem key={post.id} post={post}/>)
      }
    </div>
  )
}