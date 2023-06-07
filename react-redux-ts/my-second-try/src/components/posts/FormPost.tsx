import React, {useState} from 'react';
import Input from "../../UI/input/Input";
import {Button} from "../../UI/button/Button";
import {useCreatePostMutation} from "../../services/Postservice";
import {IPost} from "../../models/IPost";

const FormPost = () => {

    const [post, setPost] = useState({title: '', body: ''});
    const [createPost, {}] = useCreatePostMutation();

    const createNewPost = async (e: React.MouseEvent) => {
        e.preventDefault();
        await createPost(post as IPost);
        setPost({title: '', body: ''})
    }

    return (
        <div className='create-post-section'>
            <div className='create-post-title'>Creating Post:</div>
            <form className='post-form'>
                <div className='post-input-section'>
                    <label>Title: </label>
                    <Input
                        type={'text'}
                        placeholder={'Title for new post'}
                        value={post.title}
                        onChange={(e) => setPost({...post, title: e.target.value})}
                    />
                </div>
                <div className='post-input-section'>
                    <label>Description: </label>
                    <Input
                        type={'text'}
                        placeholder={'Body for new post'}
                        value={post.body}
                        onChange={(e) => setPost({...post, body: e.target.value})}
                    />
                </div>
                <div style={{textAlign: 'center', paddingTop: 10}}>
                    <Button onClick={createNewPost}>Create</Button>
                </div>
            </form>
        </div>
    );
};

export default FormPost;