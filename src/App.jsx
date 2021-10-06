import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";

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
      <section className="nocomplete-area">
        <p className="title">未達成Todo</p>
        <ul id="nocomp-items">
          {noCompleteTodos.map((todoItem, index) => {
            return (
              <li className="list-row" key={todoItem}>
                <span className="todo-title">{todoItem}</span>
                <button onClick={() => moveComplateTodo(index)}>完了</button>
                <button onClick={() => deleteTodo(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="complete-area">
        <p className="title">完了したTodo</p>
        <ul id="comp-items">
          {completeTodos.map((todoItem, index) => {
            return (
              <li className="list-row" key={todoItem}>
                <span className="todo-title">{todoItem}</span>
                <button onClick={() => moveNoCompleteTodo(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </section>

      <script src="src/index.js"></script>
    </>
  );
};
