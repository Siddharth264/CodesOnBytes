import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState();
  const [length, setLength] = useState(8);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasSpecialChars, setHasSpecialChars] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (hasNumbers) str += "0123456789";
    if (hasSpecialChars) str += "!@#$%^&*+-{}()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, hasNumbers, hasSpecialChars, setPassword]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    messageDisplay();
  },[password])
  useEffect(() => {
    generatePassword();
  }, [length, hasNumbers, hasSpecialChars, generatePassword]);

  const messageDisplay = () => {
  setShowMessage(true);
    setTimeout(()=>{
      setShowMessage(false);
    },1000);
  }
  return (
    <div className="max-w-xl  text-white mx-auto my-[15rem] p-8">
      <h1 className="text-4xl pb-6 text-center">Password generator</h1>
      <div className="flex items-center">
        <input
          placeholder="Password"
          readOnly
          className="text-slate-800 text-lg rounded-l-lg outline-none py-4 px-2 w-[25rem]"
          type="text"
          value={password}
          ref={passwordRef}
        />
        <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-5 py-[1.1rem] rounded-r-lg w-[6rem] hover:opacity-85">
          Copy
        </button>
      </div>

      <div className="flex text-[1rem] gap-x-4 mt-5">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer "
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length:{length} </label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={hasNumbers}
            onChange={() => {
              setHasNumbers((prev) => !prev);
            }}
          />
          <label>Numbers </label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="characterInput"
            defaultChecked={hasSpecialChars}
            onChange={() => {
              setHasSpecialChars((prev) => !prev);
            }}
          />
          <label>Special Chars </label>
        </div>
      </div>

      {
        showMessage && (
          <div className="mt-6 text-center">
            <p className="text-green-500 text-md">Password Copied Succesfully!!!</p>
          </div>
        )
      }
    </div>
  );
}

export default App;
