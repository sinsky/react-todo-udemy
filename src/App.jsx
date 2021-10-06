import React from "react";
import "./styles.css";
export const App = () => {
  return (
    <>
      <section class="input-area">
        <input type="text" placeholder="prease todo write!" id="todoText" />
        <button id="todoAdded">add</button>
      </section>
      <section class="nocomplete-area">
        <p>未達成Todo</p>
        <ul id="nocomp-items"></ul>
      </section>
      <section class="complete-area">
        <p>完了したTodo</p>
        <ul id="comp-items"></ul>
      </section>

      <script src="src/index.js"></script>
    </>
  );
};
