export enum UserActionsTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "SUCCESS_FETCH",
    FETCH_USERS_ERROR = "ERROR_FETCH"
}

interface FetchUsersAction {
    type: UserActionsTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: UserActionsTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

interface FetchUsersErrorAction {
    type: UserActionsTypes.FETCH_USERS_ERROR,
    payload: string
}

export  type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;

export  interface IUserState {
    users: any[];
    loading: boolean;
    error: null | string;
}