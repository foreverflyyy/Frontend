import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser} from "../../models/IUser";


export const userService = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    endpoints: builder => ({
        getUsers: builder.query<IUser[], void>({
            query: () => ({url: '/profile'})
        })
    })
})

export const {useGetUsersQuery} = userService;