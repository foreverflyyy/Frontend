import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IGenericResponse} from "../../models/IUser";
import {Register} from "../../pages/Register";
import Login from "../../pages/Login";
import {userApi} from "./userApi";

/*const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;*/
const BASE_URL = 'http://localhost:5000';

export const authApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/auth`
    }),
    endpoints: builder => ({
        // Делает запрос POST с RTK Query для регистрации пользователя
        registerUser: builder.mutation<IGenericResponse, Register>({
            query(data) {
                return {
                    url: 'register',
                    method: 'POST',
                    body: data,
                };
            },
        }),
        // POST с помощью RTK Query для входа зарегистрированного пользователя.
        loginUser: builder.mutation<
            { access_token: string; status: string },
            Login
        >({
            query(data) {
                return {
                    url: 'login',
                    method: 'POST',
                    body: data,
                    credentials: 'include' // включить RTK Query для отправки файлов cookie вместе с запросом.
                }
            },
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getMe.initiate(null))
                } catch (error) {
                }
            },
        }),
        // GET с RTK Query для проверки адреса электронной почты зарегистрированного пользователя.
        verifyEmail: builder.mutation<IGenericResponse, { verificationCode: string }>({
            query({verificationCode}) {
                return {
                    url: `verifyemail/${verificationCode}`,
                    method: 'GET'
                };
            },
        }),
        // GET с RTK Query для выхода пользователя из системы.
        logoutUser: builder.mutation<void, void>({
            query() {
                return {
                    url: 'logout',
                    credentials: 'include'
                };
            },
        }),
    }),
});

export const {
    useLogoutUserMutation,
    useLoginUserMutation,
    useVerifyEmailMutation,
    useRegisterUserMutation
} = authApi;