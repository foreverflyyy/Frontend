import {configureStore} from "@reduxjs/toolkit";
import {postApi} from "../services/Postservice";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducer = {
    [postApi.reducerPath]: postApi.reducer,
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postApi.middleware)
})

type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;