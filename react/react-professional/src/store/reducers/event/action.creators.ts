import axios from "axios";
import { AppDispatch } from "../..";
import UserService from "../../../API/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventAction, SetGuestAction } from "./types";



export const ActionGuestEventCreators = ({
   setEvent: (event: IEvent[]) :SetEventAction => ({type: EventActionEnum.SET_EVENT, payload: event}),
   setGuest: (guest: IUser[]) :SetGuestAction => ({type: EventActionEnum.SET_GUEST, payload: guest}),
   fetchGuest: () => async (dispatch: AppDispatch) => {
      try {
         const guests = await UserService.getUsers()
         dispatch(ActionGuestEventCreators.setGuest(guests.data))
      } catch (e) {
         console.log(e)
      }
   },
   createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
      try {
         const events = localStorage.getItem("events") || '[]'
         const json = JSON.parse(events) as IEvent[]
         json.push(event)
         dispatch(ActionGuestEventCreators.setEvent(json))
         localStorage.setItem('events', JSON.stringify(json))
      } catch (e) {
         console.log(e)
      }
   },
   fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
      try {
         const events = localStorage.getItem("events") || '[]'
         const json = JSON.parse(events) as IEvent[]
         const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username)
         dispatch(ActionGuestEventCreators.setEvent(currentUserEvents))
      } catch (e) {
         console.log(e)
      }
   }
})