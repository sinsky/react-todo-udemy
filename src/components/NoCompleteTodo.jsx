import React from "react";

export const NoCompleteTodo = (props) => {
  const { todoItems, moveComplateTodo, deleteTodo } = props;
  return (
    <section className="nocomplete-area">
      <p className="title">未達成Todo</p>
      <ul id="nocomp-items">
        {todoItems.map((todoItem, index) => {
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
  );
};
