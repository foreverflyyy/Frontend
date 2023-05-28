import React from 'react'
import '../styles/App.css';

export default function Post({post}) {

    return (
        <div className = "post">
            <div className='post_content'>
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.description}
                </div>
            </div>
            <button>Удалить</button>
        </div>
    )
}
