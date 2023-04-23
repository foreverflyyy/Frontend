import { AuthActionCreators } from "./auth/action-creators";
import { ActionGuestEventCreators } from "./event/action.creators";


export const allActionCreators = {
   ...AuthActionCreators,
   ...ActionGuestEventCreators
}