import React from 'react'
import '../styles/App.css'
import { MyButton } from './UI/button/MyButton'

export interface IPostInfo {
    id: number,
    title: string,
    body: string
}

interface PostItemProps {
    post: IPostInfo
}

export default function PostItem({post}: PostItemProps) {
  return (
    <div className='postItem'>
        <div>{post.id}.{post.title}</div>
        <div>{post.body}</div>
        <MyButton>Open</MyButton>
        <MyButton>Delete</MyButton>
    </div>
  )
}
