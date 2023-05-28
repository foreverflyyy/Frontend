import React from 'react'
import PostItem from './PostItem'
import '../styles/App.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function PostList({remove, posts, title}) {

    if(!posts.length){
        return (
            <h1 style={{ textAlign: 'center' }}>
                Posts didnt find
            </h1>
        )
    }

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>
            {title}
        </h1>
        <TransitionGroup>
            {posts.map((post, index) => 
                <CSSTransition
                    key={post.Id}
                    timeout={500}
                    classNames="post"
                >
                    <PostItem remove={remove} number={index + 1} post={post}/>
                </CSSTransition>
            )}
        </TransitionGroup>
    </div>
  )
}
