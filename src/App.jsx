import Create from "./components/Create";
import Read from "./components/Read";
import { useState } from "react";

function App() {
  const [todos, settodos] = useState([
    { id: 1, title: "Todo Task 1", completed: true },
  ]);

  return (
    <div className=" flex p-10 w-screen  h-screen bg-gray-800">
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
}

export default App;
