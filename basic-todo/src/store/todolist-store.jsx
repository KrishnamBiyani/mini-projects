import { createContext, useReducer } from "react";

export const todolistContext = createContext({
  todolist: [],
  onadd: () => {},
  ondel: () => {},
});

const todolistreducer = (currtodolist, action) => {
  let newtodolist = currtodolist;
  if (action.type === "add") {
    newtodolist = [
      ...currtodolist,
      {
        toname: action.payload.task,
        todate: action.payload.date,
      },
    ];
  } else if (action.type === "del") {
    newtodolist = currtodolist.filter(
      (item) => item.toname !== action.payload.todoname
    );
  }
  return newtodolist;
};

const TodolistContextProvider = ({ children }) => {
  //let [todolist, settodolist] = useState([]);
  let [todolist, dispatchtodolist] = useReducer(todolistreducer, []);

  let onadd = (task, date) => {
    const newitem = {
      type: "add",
      payload: {
        task: task,
        date: date,
      },
    };
    dispatchtodolist(newitem);

    // settodolist((currvalue) => [
    //   ...currvalue,
    //   {
    //     toname: task,
    //     todate: date,
    //   },
    // ]);
  };

  let ondel = (todoname) => {
    const delitem = {
      type: "del",
      payload: {
        todoname: todoname,
      },
    };
    dispatchtodolist(delitem);
    // let newtodlist1 = todolist.filter((item) => item.toname !== todoname);
    // settodolist(newtodlist1);
  };

  return (
    <todolistContext.Provider
      value={{ todolist: todolist, onadd: onadd, ondel: ondel }}
    >
      {children}
    </todolistContext.Provider>
  );
};

export default TodolistContextProvider;
