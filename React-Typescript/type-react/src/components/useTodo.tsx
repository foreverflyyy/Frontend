import React, { useEffect } from 'react';
import { useAction } from '../hook/userAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { fetchTodos } from '../store/action-creators/todo';

const TodoList: React.FC = () => {
  
   
  const {page, error, loading, todos, limit } = useTypedSelector(state => state.todo)
  const {fetchTodos, setTodoPage} = useAction()
  const pages = [1, 2, 3, 4, 5]
   useEffect(() => {
      fetchTodos(page, limit)
   }, [page])
   if(loading) {
      return <h1>Wait please!!!</h1>
   }
   if(error) {
      return <h1>Sorry, you have problems :(</h1>
   }

  return <div style={{paddingTop: '30px'}}>
      {todos.map(todo =>
         <div key={todo.id}>{todo.id}. {todo.title} - {todo.title}</div>
      )}
      <div style={{paddingTop: '30px', display: 'flex'}}>{pages.map(page => <div style={{paddingRight: '10px', border: '2px solid black'}} onClick={() => setTodoPage(page)}>{page}</div>)}</div>
      
  </div>;
}
export default TodoList