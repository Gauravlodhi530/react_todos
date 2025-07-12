import { toast } from "react-toastify";

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const DeleteHandler = (id) => {
    const filteredtodos = todos.filter((todo) => todo.id !== id);
    settodos(filteredtodos);
    toast.error("Todo Deleted!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const randertodos = todos.map((todo) => {
    return (
      <li
        className="flex justify-between items-center p-4 bg-gray-900 rounded mb-3 overflow-hidden max-h-screen"
        key={todo.id}
      >
        <span className="text-fuchsia-600  break-all">{todo.title}</span>
        <span
          className="text-red-500 text-xl ml-3"
          style={{ cursor: "pointer" }}
          onClick={() => DeleteHandler(todo.id)}
        >
          Delete
        </span>
      </li>
    );
  });

  return (
    <div className=" w-[40%] p-5 ">
      <h1 className="text-3xl text-white font-thin mb-5">
        {" "}
        <span className="text-orange-500">Panding</span> Todo
      </h1>
      <ol className="overflow-y-auto max-h-[calc(95vh-6rem)] w-full pr-2">
        {randertodos}
      </ol>
    </div>
  );
};

export default Read;
