import { userReducer } from './reducers/userReducer';
import { configureStore, combineReducers } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
    user: userReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;