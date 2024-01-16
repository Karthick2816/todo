import React, { useState } from "react";
import TopBar from "./components/TopBar";

function App() {
  let [todo, setTodo] = useState([
    {
      id: 1,
      title: " Task-1",
      description: "This is the task of react ",
      status: false,
    },
    {
      id: 2,
      title: "  Task-2",
      description: "This is the task of CRUD",
      status: false,
    },
    {
      id: 3,
      title: "  Task-3",
      description: "This is the of the CRUD application",
      status: false,
    },
  ]);
  let [completed, setCompleted] = useState("All");
  return (
    <>
      <TopBar
        todo={todo}
        setTodo={setTodo}
        completed={completed}
        setCompleted={setCompleted}
      />
    </>
  );
}

export default App;
