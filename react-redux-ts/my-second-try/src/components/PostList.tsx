import React, {useState} from 'react';
import PostItem from "./PostItem";
import {useGetPostsQuery} from "../services/Postservice";

const PostList = () => {

    const [limit, setLimit] = useState(5);
    const {data: posts, error: isPostsError, isLoading: isPostsLoading} = useGetPostsQuery(limit);

    return (
        <>
            {posts?.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </>
    );
};

export default PostList;