import { useState } from "react";
import Trash from '../assets/trash.svg'
import Pencil from '../assets/pencil.svg'
export default function Todo({ title, description, isChecked, id ,setChanged}, ) {

  const [updateFormData, setUpdateFormData] = useState({
    title: title,
    description: description,
  })
  const [marked, setMarked] = useState(isChecked)
  const [isEditing, setIsEditing] = useState(false)
  const [error , setError] = useState(null)
  const handleChange = async()=>{
    setMarked(marked => !marked)
   await fetch(`/api/v1/todos/${id}`,{
    method:'PATCH',
   })
  }

  const handleUpdateChange = (e) => {
    setUpdateFormData({
      ...updateFormData,
      [e.target.name]: e.target.value
    })
  }
 
  const handleClick = async() => {
    try {
      const res = await fetch(`/api/v1/todos/${id}`,{
        method: 'DELETE',
      })

      const data = await res.json();
      if(data.success === false) {
        setError(data.message)
        return
      }
      setChanged(change => !change)
    } catch (error) {
      setError(error.message);
    }
  }

  const handleUpdateSubmit=async(e)=> {
    e.preventDefault()
    try {
      const res = await fetch(`/api/v1/todos/${id}`,{
        method: 'PATCH',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateFormData),
      })

      const data = await res.json();
      if(data.success === true) {
        setError(data.message);
        return
      }
      setIsEditing(false)
      setChanged(change => !change)


    } catch (error) {
      setError(error.message);
    }
}

  return (
    <>
    <div className="flex   gap-3 justify-between border p-4 rounded-xl">
      <div className="flex flex-1">
        <div className="p-3 flex flex-col justify-center">
      <input onChange={handleChange} className="w-7 h-7" type="checkbox" checked={marked} name="checkbox" id="checkbox" />
        </div>
      <div className="flex flex-col gap-3 p-6">
        <span className="text-md md:text-lg text-blue-500 font-bold">{title}</span>
        <span className="text-xs md:text-sm text-gray-500 font-bold italic">{description}</span>
      </div>
      </div>
      <div className="flex flex-col justify-around p-3 mr-4">
      <button onClick={handleClick} className=""><img src={Trash} alt="" /></button>
      <button onClick={()=>setIsEditing(prev=>!prev)} className=""><img src={Pencil} alt="" /></button>
      </div>
    </div>
   {isEditing && <div>
      <form onSubmit={handleUpdateSubmit} className="flex justify-between px-5">
        <input required type="text" onChange={handleUpdateChange} name="title" defaultValue={title} className="border p-3 m-4 rounded-lg bg-slate-300" placeholder="Enter new title"/>
        <input required type="text" onChange={handleUpdateChange} name="description" defaultValue={description} className="border p-3 m-4 rounded-lg bg-slate-300" placeholder="Enter new description"/>
        <button>Update</button>
      </form>
    </div>}

    {error && <p className="text-red-700 text-sm">{error}</p>}
    </>
  );
}
