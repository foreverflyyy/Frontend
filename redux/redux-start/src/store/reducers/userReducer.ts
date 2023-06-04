import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser, IUserState } from "../../models/IUser";
import { fetchUsers } from "./ActionCreators";

const defaultUserState: IUserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: defaultUserState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default userSlice.reducer;