import {IUser} from "../../models/IUser";
import {setUser} from "../slices/userSlice";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;
const BASE_URL = 'http://localhost:5000';

export const userApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/users`
    }),
    tagTypes: ['User'],
    endpoints: builder => ({
        // запрос GET с файлами cookie, которые мы сохранили в браузере, на сервер в обмен на информацию о пользователе
        getMe: builder.query<IUser, null>({
            query() {
                return {
                    url: 'me',
                    credentials: 'include',
                };
            },
            // свойство позволяет нам манипулировать данными, возвращаемыми запросом или мутацией, до того, как они попадут в кеш.
            transformResponse: (result: { data: { user: IUser } }) => result.data.user,
            // функция позволит нам автоматически получать информацию о вошедшем в систему пользователе, если вход был успешным
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled; // дожидаемся разрешения запроса
                    dispatch(setUser(data)); // обновление хранилища с информацией о пользователе
                } catch (error) {
                }
            }
        })
    })
})