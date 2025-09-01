import React, { useContext } from "react";
import { useState, useRef } from "react";
import { todolistContext } from "../store/todolist-store";

function AppTodo() {
  const { onadd } = useContext(todolistContext);

  const taskr = useRef();
  const dater = useRef();

  let handleadd = () => {
    event.preventDefault();
    onadd(taskr.current.value, dater.current.value);
    taskr.current.value = "";
    dater.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleadd}>
        <div className="col-6">
          <input type="text" ref={taskr} placeholder="Enter todo" />
        </div>
        <div className="col-4">
          <input type="date" ref={dater} />
        </div>
        <div className="col-2">
          <button className="btn btn-success">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AppTodo;
