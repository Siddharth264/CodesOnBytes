import { useState } from "react"

export default function Body() {
    const [formData, setFormData] = useState({
        hint:"",
        length: "",
    });

    const [password, setPassword] = useState(null);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       const pass = makeid(formData.length)
        setPassword(pass)
    }

    
  return (
    <div className="max-w-xl p-4 mx-auto my-9">
        <form onSubmit={handleSubmit} className="flex flex-col p-5">
            <input onChange={handleChange} className="p-3 m-4 border-2 rounded-2xl active:border-zinc-300" type="text" name="hint" id="hint" value={formData.hint} placeholder="Enter a hint...." />
            <input onChange={handleChange} className="p-3 m-4 border-2 rounded-2xl active:border-zinc-300" type="number" name="length" id="length" value={formData.length} placeholder="Enter the length of the password" />
            <button className="p-3 m-6 w-48 mx-auto bg-fuchsia-400 hover:bg-fuchsia-600 border-gray-400 rounded-xl ">Generate Password</button>

            <span className="p-3 m-5 border text-center rounded-xl bg-slate-200">
                {
                    password ? password: 'Your password will be shown here'
                }
            </span>
        </form>
    </div>
  )
}
