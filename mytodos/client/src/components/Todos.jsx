import { useEffect, useState } from "react";
import Todo from "./Todo";
export default function Todos() {
  const [todos, setTodos] = useState([])
  const [formData,setFormData] = useState({
    title: "",
    description: ""
  })
  const [changed, setChanged] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(()=>{
   fetch(`/api/v1/todos/`).then(res => res.json()).then(data=>setTodos(data))
  },[changed])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    setError(null)
    e.preventDefault()
    try {
      const res = await fetch(`/api/v1/todos`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      if(data.success === false){
        setLoading(false)
        setError(data.message)
        return
      }
      setLoading(false)
      setChanged(created=>!created)
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }

  const todosElement = todos.map(todo => {
    return <Todo key={todo._id} title={todo.title} description={todo.description} isChecked={todo.isComplete} id={todo._id} setChanged={setChanged}/>
  })
  return (
    <div className="max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto mt-20 mb-40 flex flex-col gap-4">
      <span className="text-2xl font-bold text-gray-600 font-Poppins text-center my-5">
        My Task List
      </span>
        <form className="mx-auto my-7 flex flex-col md:flex-row items-center gap-4" onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" type="text" placeholder="Enter a title" className="p-3 border-2 rounded-xl m-2 hover:shadow-md"  />
      <input onChange={handleChange} name="description" type="text" placeholder="Enter a description" className="p-3 border-2 rounded-xl m-2 hover:shadow-md" />
      <button disabled={loading} className="flex items-center gap-2 bg-blue-600 py-3 px-6 rounded-lg text-white font-bold hover:bg-blue-500">
        {loading ? 'Adding...': 'Add'}
      </button>
        </form>
     <div>
     { error && <p className="text-red-700 text-center mb-5 text-md">{error}</p>}
     </div>
    
    {todosElement}
    
      
    </div>
  );
}
