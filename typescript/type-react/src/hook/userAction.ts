import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import UserActions from "../store/action-creators/"


export const useAction = () => {
   const dispatch = useDispatch()
   return bindActionCreators(UserActions, dispatch)
}