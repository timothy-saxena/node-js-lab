import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        setTodos([...todos, task]);
    };

    return (
        <div>
            <h2>Todo App</h2>

            <TodoForm addTodo={addTodo} />

            <TodoList todos={todos} />
        </div>
    );
}

export default App;
