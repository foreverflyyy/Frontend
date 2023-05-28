import React from 'react'
import '../styles/App.css';
import MyButton from './UI/button/MyButton';

export default function Post({remove, number, post}) {

    return (
        <div className = "post">
            <div className='post_content'>
                <strong>{number}. {post.title}</strong>
                <div>
                    {post.description}
                </div>
            </div>
            <MyButton onClick={() => remove(post)}>
                Удалить
            </MyButton>
        </div>
    )
}
