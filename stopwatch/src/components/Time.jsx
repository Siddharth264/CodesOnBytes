import { useEffect, useState } from "react";

export default function Time() {
  const [newDate, setNewDate] = useState(new Date());
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();

  useEffect(() => {
    var timer = setInterval(() => setNewDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);


  let separator = " : ";
  return (
    <div className="mt-12 ">
      <div className="flex flex-col lg:flex-row justify-between gap-4 w-full items-center lg:mt-16">
        <h1 className="text-xl text-slate-600 font-bold">
          India, Kolkata📍(IST)
        </h1>
        <h1 className="text-xl text-slate-600 font-semibold">{`${year}${separator}${
          month < 10 ? `0${month}` : `${month}`
        }${separator}${date}`}</h1>
      </div>
      <div className="">
        <h1 className=" text-5xl lg:text-5xl tracking-wider text-center m-12 lg:m-24">{`${
          hour < 10 ? `0${hour}` : `${hour}`
        }${separator}${minute < 10 ? `0${minute}` : `${minute}`}${separator}${
          second < 10 ? `0${second}` : `${second}`
        }`}</h1>
      </div>
     
    </div>
  );
}
