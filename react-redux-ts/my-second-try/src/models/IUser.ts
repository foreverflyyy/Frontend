export interface IUser {
    _id: string;
    name: string;
    email: string;
    role?: string;
}

export interface IUserState {
    user: IUser | null,
}

export interface IGenericResponse {
    status: string;
    message: string;
}