import React from "react";

const TodoInput = ({ value, handleChange, handleSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <form onSubmit={submit}>
      <input type="text" data-testid="todo-input" value={value} onChange={handleChange} />
      <button data-testid="todo-button" type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
