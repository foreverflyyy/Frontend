import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser, IUserState} from "../../models/IUser";

const defaultValueUser: IUser = {
    name: 'Nikita',
    email: 'nikita@mail',
    _id: '123123',
    role: 'admin'
}

const initialState: IUserState = {
    user: defaultValueUser,
}

export const userSlice = createSlice({
    name: 'userApi',
    initialState,
    reducers: {
        logout: () => initialState,
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
    },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
export const {logout, setUser} = userSlice.actions;