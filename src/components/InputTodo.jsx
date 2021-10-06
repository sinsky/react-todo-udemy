import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <section className="input-area">
      <p className="title">Todoの登録</p>
      <div className="register-area">
        <input
          type="text"
          placeholder="prease todo write!"
          value={todoText}
          onChange={onChange}
          id="todoText"
        />
        <button id="todoAdded" onClick={onClick}>
          add
        </button>
      </div>
    </section>
  );
};
