import React from 'react';
import {IPost} from "../models/IPost";
import {Button} from "../UI/button/Button";

interface IPostItemProps {
    post: IPost
}

const PostItem = ({post}: IPostItemProps) => {

    const handlerOpenPost = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log('open post!!!');
    }

    const handlerDeletePost = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log('you wanted to delete post!!!');
    }

    return (
        <div className={'post-container'}>
            <p>{post.id}. {post.title}</p>
            <p>{post.body}</p>
            <Button onClick={handlerOpenPost}>Open</Button>
            <Button onClick={handlerDeletePost}>Delete</Button>
        </div>
    );
};

export default PostItem;