import React, { useContext } from "react";
import Todoitem from "./Todoitem";
import { todolistContext } from "../store/todolist-store";

const TodoItems = () => {
  const { todolist } = useContext(todolistContext);

  return (
    <>
      <div className="items-container">
        {todolist.map((item) => (
          <Todoitem
            todoname={item.toname}
            tododate={item.todate}
            key={item.toname}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
