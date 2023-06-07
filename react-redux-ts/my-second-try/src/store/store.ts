import {configureStore} from "@reduxjs/toolkit";
import {postApi} from "../services/Postservice";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {authReducer} from "./slices/authSlice";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postApi.middleware)
})

setupListeners(store.dispatch);

type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;