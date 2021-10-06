import React, { useState } from "react";

import "./styles.css";
export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [noCompleteTodos, setNoCompleteTodos] = useState(["Doit"]);
  const [completeTodos, setCompleteTodos] = useState(["complete"]);
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const addTodoItem = () => {
    if (todoText === "") return;
    const newTodos = [...noCompleteTodos];
    newTodos.push(todoText);
    setNoCompleteTodos(newTodos);
    setTodoText("");
  };
  return (
    <>
      <section class="input-area">
        <p class="title">Todoの登録</p>
        <div class="register-area">
          <input
            type="text"
            placeholder="prease todo write!"
            value={todoText}
            onChange={onChangeTodoText}
            id="todoText"
          />
          <button id="todoAdded" onClick={addTodoItem}>
            add
          </button>
        </div>
      </section>
      <section class="nocomplete-area">
        <p class="title">未達成Todo</p>
        <ul id="nocomp-items">
          {noCompleteTodos.map((todoItem) => {
            return (
              <li class="list-row" key={todoItem}>
                <span class="todo-title">{todoItem}</span>
                <button class="moveComplateTodo">完了</button>
                <button class="deleteTodo">削除</button>
              </li>
            );
          })}
        </ul>
      </section>
      <section class="complete-area">
        <p class="title">完了したTodo</p>
        <ul id="comp-items">
          {completeTodos.map((todoItem) => {
            return (
              <li class="list-row" key={todoItem}>
                <span class="todo-title">{todoItem}</span>
                <button class="moveNoCompleteTodo">戻す</button>
              </li>
            );
          })}
        </ul>
      </section>

      <script src="src/index.js"></script>
    </>
  );
};
