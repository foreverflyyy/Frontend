import React from 'react'
import PostItem from './PostItem';

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
        {posts.map((post, index) => 
            <PostItem key={post.Id} remove={remove} number={index + 1} post={post}/>
        )};
    </div>
  )
}
