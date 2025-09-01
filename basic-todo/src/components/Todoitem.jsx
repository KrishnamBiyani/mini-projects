import React, { useContext } from "react";
import { todolistContext } from "../store/todolist-store";

function Todoitem({ tododate, todoname }) {
  const { ondel } = useContext(todolistContext);
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-6 left">{todoname}</div>
          <div className="col-4 left">{tododate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => ondel(todoname)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
