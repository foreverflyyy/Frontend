import { favRepoActions } from "./reducers/favRepoSlice";
import {useDispatch} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit'

const actions = {
    ...favRepoActions
}

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}