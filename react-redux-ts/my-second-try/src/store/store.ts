import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {

}

export const store = configureStore ({
    reducer: rootReducer,
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat()
})