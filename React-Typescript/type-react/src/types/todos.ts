export interface TodoState {
   todos: any[],
   loading: boolean,
   error: null | string,
   page: number,
   limit: number
}

export enum TodoActionsTypes {
   FETCH_TODOS = 'FETCH_TODOS',
   FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
   FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
   SET_TODOS_PAGE = 'SET_TODOS_PAGE'
}

interface FetchTodos {
   type: TodoActionsTypes.FETCH_TODOS
}
interface FetchTodosSuccess {
   type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
   payload: any[]
}
interface FetchTodosError {
   type: TodoActionsTypes.FETCH_TODOS_ERROR,
   payload: string
}
interface SetTodosPage {
   type: TodoActionsTypes.SET_TODOS_PAGE,
   payload: number
}

export type TodoAction = FetchTodos | FetchTodosError | FetchTodosSuccess | SetTodosPage