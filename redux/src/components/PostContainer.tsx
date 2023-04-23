import React from 'react'
import { IPost } from '../models/IPost'
import { postApi } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
   const {data: posts, error, isLoading} = postApi.useFetchAllPostsQuery(10)
   const [createPost, {}] = postApi.useCreatePostMutation()
   const [updatePost, {}] = postApi.useUpdatePostMutation()
   const [deletePost, {}] = postApi.useDeletePostMutation()
   const handleCreate = async () => {
      const title = prompt()
      await createPost({title, body: title} as IPost)
   }
   const handlerRemove = (post: IPost) => {
      deletePost(post)
   }
   const handlerUpdate= (post: IPost) => {
      updatePost(post)
   }
   return (
    <div>
      <div className='post__list'>
         <button onClick={handleCreate}>Add new post</button>
         {isLoading && <h1>Wait please...</h1>}
         {error && <h1>Sorry you have the problem!</h1>}
         {posts?.map(post => 
               <PostItem remove={handlerRemove} update={handlerUpdate} key={post.id} post={post}/>
            )}
      </div>
    </div>
  )
}

export default PostContainer