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
    <div className="flex flex-col items-center mt-24 mb-16 xl:pl-32">
      <h1 className=" text-sm lg:text-lg text-slate-600 my-4 font-medium ">Online Stop watch and timer</h1>
      <h1 className="text-5xl lg:text-5xl tracking-wide mt-9 lg:mt-20">
        {" "}
        {hours} : {minute.toString().padStart(2, "0")} :{" "}
        {sec.toString().padStart(2, "0")} : {ms.toString().padStart(2, "0")}
      </h1>
      <div className="flex invisible w-full justify-between lg:mb-9 font-light text-sm">
        <span className="ml-9">Hours</span>
        <span>Minutes</span>
        <span>Seconds</span>
        <span>ms</span>
      </div>
      <div className="">
        <button
          className="px-7 py-3 mx-7 my-10 text-xl font-extrabold text-white  bg-btncolor rounded-2xl border-gray-300 hover:bg-sec-btncolor"
          onClick={handleStartStop}
        >
          {isCounting ? "Stop" : "Start"}
        </button>
        <button
          className="px-7 py-3 mx-2 my-10  text-xl font-black  bg-sec-btncolor rounded-xl border-gray-300 text-slate-600 hover:opacity-70"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
