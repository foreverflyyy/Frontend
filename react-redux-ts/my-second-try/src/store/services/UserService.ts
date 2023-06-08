import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser} from "../../models/IUser";
import {setUser} from "../slices/authSlice";


const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/auth/`
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getMe: builder.query<IUser, null>({
            query() {
                return {
                    url: 'me',
                    credentials: 'include',
                };
            },
            /*свойство позволяет нам манипулировать данными, возвращаемыми
            запросом или мутацией, до того, как они попадут в кеш*/
            transformResponse: (result: { data: { user: IUser } }) =>
                result.data.user,
            /*функция позволит нам автоматически получать информацию о вошедшем
            в систему пользователе, если вход был успешным*/
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled; // Разрешение запроса
                    dispatch(setUser(data));
                } catch (error) {
                }
            }
        })
    })
});