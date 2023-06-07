import React, {useState} from 'react';
import PostItem from "./PostItem";
import {useDeletePostMutation, useGetPostsQuery} from "../../services/Postservice";
import {IPost} from "../../models/IPost";
import {useNavigate} from "react-router-dom";

const PostList = () => {

    const [limit, setLimit] = useState(20);
    const navigate = useNavigate();

    const [deletePost, {}] = useDeletePostMutation();
    const {
        data,
        error: isGetError,
        isLoading: isGetLoading
    } = useGetPostsQuery(limit);

    const removePost = (post: IPost) =>
        deletePost(post);

    const openPost = (post: IPost) =>
        navigate(`./${post.id}`, {replace: true});

    if (data?.length === 0)
        return <div className='title-posts-text'>List of posts empty</div>

    if (isGetLoading)
        return <div className='loading-text'>Loading...</div>

    if (isGetError)
        return <div className='error-text'>Happened error, when loading data!</div>

    return (
        <div>
            <div className='title-posts-text'>
                List of posts:
            </div>

            {data?.map(post =>
                <PostItem key={post.id} removePost={removePost} openPost={openPost} post={post}/>
            )}
        </div>
    );
};

export default PostList;