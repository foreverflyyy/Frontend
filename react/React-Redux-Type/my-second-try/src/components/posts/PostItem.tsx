import React from 'react';
import {IPost} from "../../models/IPost";
import {Button} from "../../UI/button/Button";

interface IPostItemProps {
    post: IPost,
    removePost: (post: IPost) => void,
    openPost: (post: IPost) => void,
}

const PostItem = ({post, openPost, removePost}: IPostItemProps) => {

    const handlerOpenPost = (e: React.MouseEvent) => {
        e.preventDefault();
        openPost(post);
    }

    const handlerDeletePost = (e: React.MouseEvent) => {
        e.preventDefault();
        removePost(post);
    }

    return (
        <div className='post-item'>
            <div className='post-item-container'>
                <div className='post-item-text'>
                    <div className='post-item-title'>{post.id}. {post.title}</div>
                    <div className='post-item-body'>{post.body}</div>
                </div>
                <div className='post-btns'>
                    <Button onClick={handlerOpenPost}>Open</Button>
                    <Button onClick={handlerDeletePost}>Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;