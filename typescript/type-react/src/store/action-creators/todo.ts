import axios from "axios"
import { Dispatch } from "react"
import { TodoAction, TodoActionsTypes } from "../../types/todos"



export const fetchTodos = (page = 1, limit = 10) => {
   return async (dispatch: Dispatch<TodoAction>) => {
      try{
         dispatch({type: TodoActionsTypes.FETCH_TODOS})
         const person = await axios.get('https://jsonplaceholder.typicode.com/todos', {params: {_page: page, _limit: limit}})
         setTimeout(() => dispatch({type: TodoActionsTypes.FETCH_TODOS_SUCCESS, payload: person.data}), 1000)
      } catch(e) {
         dispatch({type: TodoActionsTypes.FETCH_TODOS_ERROR, payload: 'Sorry, but you have problems'})
      }
   }
}

export const setTodoPage = (page: number): TodoAction => {
   return {type: TodoActionsTypes.SET_TODOS_PAGE, payload: page}
}