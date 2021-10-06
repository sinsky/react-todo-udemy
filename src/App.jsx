import React, { useState } from "react";
import { CompleteTodo } from "./components/CompleteTodo";
import { InputTodo } from "./components/InputTodo";
import { NoCompleteTodo } from "./components/NoCompleteTodo";

import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [noCompleteTodos, setNoCompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const addTodoItem = () => {
    if (todoText === "") return;
    const newTodos = [...noCompleteTodos, todoText];
    setNoCompleteTodos(newTodos);
    setTodoText("");
  };
  const deleteTodo = (index) => {
    const newTodos = [...noCompleteTodos];
    newTodos.splice(index, 1);
    setNoCompleteTodos(newTodos);
  };
  const moveComplateTodo = (index) => {
    const noCompTodos = [...noCompleteTodos];
    noCompTodos.splice(index, 1);
    const compTodos = [...completeTodos, noCompleteTodos[index]];

    setNoCompleteTodos(noCompTodos);
    setCompleteTodos(compTodos);
  };
  const moveNoCompleteTodo = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newNoCompleteTodos = [...noCompleteTodos, completeTodos[index]];

    setNoCompleteTodos(newNoCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={addTodoItem}
      />
      <NoCompleteTodo
        todoItems={noCompleteTodos}
        moveComplateTodo={moveComplateTodo}
        deleteTodo={deleteTodo}
      />
      <CompleteTodo
        completeTodos={completeTodos}
        moveNoCompleteTodo={moveNoCompleteTodo}
      />
      <script src="src/index.js"></script>
    </>
  );
};
