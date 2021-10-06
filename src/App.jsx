import React from "react";
import "./styles.css";
export const App = () => {
  return (
    <>
      <section class="input-area">
        <p class="title">Todoの登録</p>
        <div class="register-area">
          <input type="text" placeholder="prease todo write!" id="todoText" />
          <button id="todoAdded">add</button>
        </div>
      </section>
      <section class="nocomplete-area">
        <p class="title">未達成Todo</p>
        <ul id="nocomp-items"></ul>
      </section>
      <section class="complete-area">
        <p class="title">完了したTodo</p>
        <ul id="comp-items"></ul>
      </section>

      <script src="src/index.js"></script>
    </>
  );
};
