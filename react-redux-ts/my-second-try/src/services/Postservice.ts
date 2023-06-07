import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IPost} from '../models/IPost';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Post'],
    refetchOnFocus: true,
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        getSinglePost: builder.query<IPost, number>({
            query: (idPost) => ({
                url: `/posts/${idPost}`,
            })
        }),
        createPost: builder.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: builder.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Post']
        })
    }),
})

export const {
    useGetPostsQuery,
    useGetSinglePostQuery,
    useDeletePostMutation,
    useCreatePostMutation
} = postApi;
