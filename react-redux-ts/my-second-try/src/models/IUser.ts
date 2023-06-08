export interface IUser {
    id: string;
    name: string;
    email: string;
    photo?: string;
    role?: string;
    provider?: string;
    active?: boolean;
    verified?: boolean;
}