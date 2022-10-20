// import React, {useContext,useState} from 'react';
import NewTodo from './component/NewTodo';
import Todos from './component/Todos';
// import Todo from './model/todo';
import TodoContextProvider from './store/todo-context';

function App() {
// const todo = [ new Todo('Code'), new Todo('Eat') ];

// const [todos, setTodos] = useState<Todo[]>([]);

// const addTodoHandler = (text: string) => {
// const NewTodo = new Todo(text);
// setTodos((prevTodos) => {
//   return prevTodos.concat(NewTodo);
// });
// };

// const removeTodoHandler = (todoId: string) => {
// setTodos((prevTodos) => {
//   return prevTodos.filter(todo => todo.id !== todoId)
// });
// };

  return (
    <div>
      <TodoContextProvider>
     <NewTodo />
      <Todos />
      </TodoContextProvider>

    </div>
  );
}

export default App;
