import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const IS_AUTH = 'IS_AUTH';

interface IAuthState {
    isAuth: boolean;
}

const initialState: IAuthState = {
    isAuth: JSON.parse(localStorage.getItem(IS_AUTH) ?? 'false')
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn(state, action: PayloadAction<void>) {
            state.isAuth = true;
            localStorage.setItem(IS_AUTH, 'true');
        },
        signOut(state, action: PayloadAction<void>) {
            state.isAuth = false;
            localStorage.removeItem(IS_AUTH);
        }
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;