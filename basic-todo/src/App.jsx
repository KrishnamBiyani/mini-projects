import AppTodo from "./components/AppTodo";
import TodoName from "./components/TodoName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import TodolistContextProvider from "./store/todolist-store";

function App() {
  return (
    <TodolistContextProvider>
      <center>
        <TodoName />
        <AppTodo />
        <TodoItems />
      </center>
    </TodolistContextProvider>
  );
}

export default App;
