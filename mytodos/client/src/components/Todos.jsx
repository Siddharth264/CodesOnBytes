import { useEffect, useState } from "react";
import Todo from "./Todo";
export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [changed, setChanged] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`/api/v1/todos/`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [changed]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/v1/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setFormData({title:"", description:""})
      setChanged(prev=> !prev)
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const todosElement = todos.map((todo) => {
    return (
      <Todo
        key={todo._id}
        title={todo.title}
        description={todo.description}
        isChecked={todo.isComplete}
        id={todo._id}
        setChanged={setChanged}
      />
    );
  });
  return (
    <div className=" max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto mt-20 mb-40 flex flex-col gap-4">
      <form
        className="mx-auto my-7 flex flex-col md:flex-row justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          name="title"
          type="text"
          value={formData.title}
          placeholder="Enter a title"
          className=" p-3 bg-white border rounded-xl m-2 outline-none lg:w-68 hover:shadow-md"
        />
        <input
          onChange={handleChange}
          name="description"
          type="text"
          value={formData.description}
          placeholder="Enter a description"
          className=" p-3 bg-white border rounded-xl m-2 outline-none lg:w-96 hover:shadow-md"
        />
        <button
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 py-3 px-6 ml-8 rounded-lg text-white font-bold hover:bg-blue-500"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </form>
      <div>
        {error && (
          <p className="text-red-700 text-center mb-5 text-md">{error}</p>
        )}
      </div>

      {todosElement}
    </div>
  );
}
