import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";


export interface EventState {
   guests: IUser[],
   events: IEvent[]
}

export enum EventActionEnum {
   SET_GUEST = 'SET_GUEST',
   SET_EVENT = 'SET_EVENT'
}

export interface SetGuestAction {
   type: EventActionEnum.SET_GUEST,
   payload: IUser[]
}
export interface SetEventAction {
   type: EventActionEnum.SET_EVENT,
   payload: IEvent[]
}
export type EventAction = SetGuestAction | SetEventAction