import { IUserState, UserAction, UserActionsTypes } from "../../types/user"

const defaultState : IUserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state : IUserState = defaultState, action : UserAction) : IUserState => {
  switch(action.type) {
    case UserActionsTypes.FETCH_USERS:
        return {...state, loading : true} 
    case UserActionsTypes.FETCH_USERS_SUCCESS: 
        return {...state, loading: false, users: state.users}
    case UserActionsTypes.FETCH_USERS_ERROR: 
        return {...state, loading: false, error: action.payload}
    default: 
        return state;
  }
}
