import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "./wrapper";



const Create = (props) => {
 const [todos, settodos] = useContext(todocontext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    
    data.completed = false;
    data.id = nanoid();
    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);

    toast.success("Todo Created!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    reset();
  };

  return (
    <div className=" w-[60%] p-5">
      <h1 className=" text-3xl text-white font-thin mb-10">
        Set <span className="text-red-400">Remainder</span> For <br />
        Tasks
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", { required: "Task is required" })}
          className=" p-2 border-b w-full text-2xl font-thin  outline-0 text-white "
          type="text"
          placeholder="Enter Your Task"
        />
        {errors && errors.title && errors.title.message && (
          <small className="text-red-500">{errors.title.message}</small>
        )}
        <br />
        <br />
        <button
          className="text-xl px-5 border border-red-50 rounded mt-5 pb-1 text-center cursor-pointer text-blue-100"
          type="submit"
        >
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
