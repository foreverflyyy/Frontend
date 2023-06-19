import { configureStore } from "@reduxjs/toolkit"
import { userApi } from "./reducers/userApi"
import {setupListeners} from '@reduxjs/toolkit/query'
import { favRepoReducer } from "./reducers/favRepoSlice";
import {TypedUseSelectorHook, useSelector} from 'react-redux'

export const store = configureStore ({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        reposFav: favRepoReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;