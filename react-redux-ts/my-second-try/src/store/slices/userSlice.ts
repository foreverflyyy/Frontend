import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser, IUserState} from "../../models/IUser";

const initialState: IUserState = {
    user: {} as IUser,
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'userApi',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<IUser>) => {
            try {

            } catch (e) {
                state.isLoading = false;
                state.error = 'Invalid login or password!'
            }
        }
    }
})