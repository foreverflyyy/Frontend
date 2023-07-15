import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser, ServerResponse } from '../../models/IUser'
import { IRepos } from '../../models/IRepository';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com'}),
    refetchOnFocus: true,
    endpoints: build => ({
        getUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: 'search/users',
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response: ServerResponse) => response.items
        }),
        getUserRepo: build.query<IRepos[], string>({
            query: (username: string) => ({
                url: `users/${username}/repos`,
            })
        })
    })
}) 

export const { useGetUsersQuery, useLazyGetUserRepoQuery } = userApi;