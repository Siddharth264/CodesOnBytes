import { useEffect, useState } from "react";

export default function Body() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let interval;
    if (isCounting) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isCounting, count]);

  const handleStartStop = () => {
    setIsCounting((prev) => !prev);
  };

  const handleReset = () => {
    setIsCounting(false);
    setCount(0);
  };

  const hours = Math.floor(count / 360000);
  const minute = Math.floor((count % 360000) / 6000);
  const sec = Math.floor((count % 6000) / 100);
  const ms = Math.floor(count % 100);
  return (
    <div className="time-container">
      <h1 className="text-3xl mb-20 font-extrabold ">My Stop Watch</h1>
      <h1 className="time">
        {" "}
        {hours}: {minute.toString().padStart(2, "0")}:{" "}
        {sec.toString().padStart(2, "0")}: {ms.toString().padStart(2, "0")}
      </h1>
      <div className="">
        <button
          className="p-3 mx-7 my-10 border rounded-xl bg-gray-200 hover:bg-white "
          onClick={handleStartStop}
        >
          {isCounting ? "Stop" : "Start"}
        </button>
        <button
          className="p-3 mx-2 my-10 border rounded-xl bg-gray-200 hover:bg-white "
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
