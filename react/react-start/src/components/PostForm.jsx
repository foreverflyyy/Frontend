import React, { useState } from 'react'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

 const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', description: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = { ...post, id: Date.now() };
        setPost({title: '', description: ''});
        create(newPost);
    }

    return (
        <form>
            <MyInput 
            type='text' 
            placeholder='Title' 
            value={post.title} 
            onChange={(e) => setPost({...post, title: e.target.value})
            }/>
            <MyInput
            type='text' 
            placeholder='Description' 
            value={post.description} 
            onChange={(e) => setPost({...post, description: e.target.value})
            }/>

            <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
    )
}

export default PostForm;