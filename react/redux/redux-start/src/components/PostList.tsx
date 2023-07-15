import { useState } from 'react'
import { postApi } from '../services/PostService';
import { PostItem } from './PostItem';
import { IPost } from '../models/IPost';
import '../App.css'

export const PostList = () => {

    const [limit] = useState(15);
    const { data: posts, error: errorGet, isLoading: isLoadingGet, refetch} = postApi.useGetPostsQuery(limit);
    const [createPost, {}] = postApi.useCreatePostMutation();
    const [updatePost, {}] = postApi.useUpdatePostMutation();
    const [removePost, {}] = postApi.useDeletePostMutation();

    const handleCreate = async () => {
        const title = prompt() || "new post";
        await createPost({title, body: title} as IPost);
    }

    const handleRemove = (post: IPost) => {
        removePost(post);
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post);
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>Add new post</button>
                {isLoadingGet && <h1>Идет загрузка...</h1>}
                {errorGet && <h1>Произошла ошибка при загрузке</h1>}
                {posts && posts.map(post => 
                    <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>
                )}
            </div>
        </div>
    )
}
