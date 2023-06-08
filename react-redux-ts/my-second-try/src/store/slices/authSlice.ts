import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";

const IS_AUTH = 'IS_AUTH';

interface IUserState {
    user: IUser | null;
}

const initialState: IUserState = {
    user: null,
}

export const userSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            //localStorage.setItem(IS_AUTH, 'true');
        },
        logout: () => initialState
    }
})

export const authActions = userSlice.actions;
export const authReducer = userSlice.reducer;
export const {setUser, logout} = userSlice.actions;