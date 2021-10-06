import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, moveNoCompleteTodo } = props;
  return (
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
  );
};
