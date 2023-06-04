export  interface IUserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

export interface IUser {
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
    }
}