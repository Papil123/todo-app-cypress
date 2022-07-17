import React from "react";

const TodoList = ({ todos = [] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input data-testid="todo-input" type="checkbox" value={todo.isCompleted} />
          <span data-testid="todo-value" >{todo.value}</span>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
