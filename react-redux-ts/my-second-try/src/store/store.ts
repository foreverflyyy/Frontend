import {configureStore} from "@reduxjs/toolkit";
import {postApi} from "./services/postApi";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {setupListeners} from "@reduxjs/toolkit/query";
import {userSlice} from "./slices/userSlice";
import {authApi} from "./services/authApi";
import {userApi} from "./services/userApi";

export const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        user: userSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([postApi.middleware, authApi.middleware])
})

setupListeners(store.dispatch);

type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;