import {configureStore} from "@reduxjs/toolkit";
import {postApi} from "./services/PostService";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {authReducer} from "./slices/authSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import {authApi} from "./services/AuthService";
import {userApi} from "./services/UserService";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [postApi.reducerPath]: postApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;