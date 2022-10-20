import React, {useState} from "react";
import Todo from "../model/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
  };
  type TodoProps = {
    children: React.ReactNode; // 👈️ type children
  };
  
  export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodoContextProvider: React.FC <TodoProps> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

const addTodoHandler = (text: string) => {
const NewTodo = new Todo(text);

setTodos((prevTodos) => {
  return prevTodos.concat(NewTodo);
});
};

const removeTodoHandler = (todoId: string) => {
setTodos((prevTodos) => {
  return prevTodos.filter((todo) => todo.id !== todoId)
});
};

const contextValue:
    TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
};

    return (<TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
    );
};

export default TodoContextProvider;