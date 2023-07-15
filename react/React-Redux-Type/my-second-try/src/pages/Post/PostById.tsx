import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useGetSinglePostQuery} from "../../store/services/postApi";
import {Button} from "../../UI/button/Button";

const PostById = () => {

    const params = useParams();
    const navigate = useNavigate();

    const {data: post, isLoading, isError} = useGetSinglePostQuery(Number(params.id));

    const returnBack = () => {
        navigate(`../posts`);
    }

    if (isLoading)
        return <div className='loading-text'>Loading...</div>

    if (isError)
        return <div className='error-text'>Happened error! May be this user is not there!</div>

    return (
        <div className='post-page'>
            <div className='post-hello-text'>
                You open the page of post with ID: {post?.id}
            </div>
            <div className='post-card'>
                <div className='post-title'>
                    Title: {post?.title}
                </div>

                <div className='post-body'>
                    Description: {post?.body}
                </div>
            </div>

            <div style={{textAlign: 'center'}}>
                <Button onClick={returnBack}>Back</Button>
            </div>
        </div>
    );
};

export default PostById;