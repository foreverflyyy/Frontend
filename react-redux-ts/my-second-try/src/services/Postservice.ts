import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IPost} from '../models/IPost';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            })
        }),
    }),
})

export const {useLazyGetPostsQuery, useGetPostsQuery} = postApi;
