import React from 'react'
import '../styles/App.css';
import MyButton from './UI/button/MyButton';

export default function Post({remove, post}) {

    return (
        <div className = "post">
            <div className='post_content'>
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <MyButton onClick={() => remove(post)}>
                Удалить
            </MyButton>
        </div>
    )
}
