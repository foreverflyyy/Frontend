import React, {useState} from 'react';
import PostItem from "./PostItem";
import {useGetPostsQuery} from "../services/Postservice";

const PostList = () => {

    const [limit, setLimit] = useState(5);
    const {
        data: posts,
        error: isPostsError,
        isLoading: isPostsLoading
    } = useGetPostsQuery(limit);

    return (
        <div>
            {isPostsLoading && <div style={{color: 'red'}}>Loading...</div>}
            {isPostsError && <div style={{color: 'red'}}>Happened error, when loading data!</div>}

            {posts?.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostList;