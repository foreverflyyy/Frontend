import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IGenericResponse} from "../../models/GenericResponse";
import {userApi} from "./UserService";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

interface RegisterInput {
}

interface LoginInput {
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/auth/`
    }),
    endpoints: (builder) => ({
        // запрос регистрации пользователя
        registerUser: builder.mutation<IGenericResponse, RegisterInput>({
            query(data) {
                return {
                    url: 'profile',
                    method: 'POST',
                    body: data
                }
            }
        }),
        // запрос для входа зарегистрированного пользователя.
        loginUser: builder.mutation<
            { access_token: string, status: string },
            LoginInput
        >({
            query(data) {
                return {
                    url: 'login',
                    method: 'POST',
                    body: data,
                    credentials: 'include', // для отправки файлов cookie вместе с запросом
                }
            },
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getMe.initiate(null));
                } catch (error) {
                }
            }
        }),
        // запрос для проверки адреса электронной почты зарегистрированного пользователя.
        verifyEmail: builder.mutation<IGenericResponse, { verificationCode: string }>({
            query({verificationCode}) {
                return {
                    url: `verifyEmail/${verificationCode}`,
                    method: 'GET',
                };
            }
        }),
        logoutUser: builder.mutation<void, void>({
            query() {
                return {
                    url: 'logout',
                    credentials: 'include',
                };
            }
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useVerifyEmailMutation,
    useLogoutUserMutation
} = authApi;