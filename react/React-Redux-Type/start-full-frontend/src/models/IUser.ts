export interface IUser {
    id: number;
    login: string;
}

export interface ServerResponse {
    items: IUser[]
}