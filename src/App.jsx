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
  const deleteTodo = (index) => {
    const newTodos = [...noCompleteTodos];
    newTodos.splice(index, 1);
    setNoCompleteTodos(newTodos);
  };
  return (
    <>
      <section className="input-area">
        <p className="title">Todoの登録</p>
        <div className="register-area">
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
      <section className="nocomplete-area">
        <p className="title">未達成Todo</p>
        <ul id="nocomp-items">
          {noCompleteTodos.map((todoItem, index) => {
            return (
              <li className="list-row" key={todoItem}>
                <span className="todo-title">{todoItem}</span>
                <button className="moveComplateTodo">完了</button>
                <button onClick={() => deleteTodo(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="complete-area">
        <p className="title">完了したTodo</p>
        <ul id="comp-items">
          {completeTodos.map((todoItem) => {
            return (
              <li className="list-row" key={todoItem}>
                <span className="todo-title">{todoItem}</span>
                <button className="moveNoCompleteTodo">戻す</button>
              </li>
            );
          })}
        </ul>
      </section>

      <script src="src/index.js"></script>
    </>
  );
};
