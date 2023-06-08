import {authActions} from "./slices/authSlice";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";


const actions = {
    ...authActions
}

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}