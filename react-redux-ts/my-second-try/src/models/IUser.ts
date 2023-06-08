export interface IUser {
    id: string;
    name: string;
    email: string;
}

export interface IUserState {
    user: IUser,
    isLoading: boolean;
    error: string;
}