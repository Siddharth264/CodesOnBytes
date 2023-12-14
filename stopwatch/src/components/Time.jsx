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


  let separator = ":";
  return (
    <div className="my-16 ">
      <h1 className="text-3xl font-bold my-16 text-center">My Watch</h1>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold">
          India, Kolkata📍(Indian Standard Time)
        </h1>
        <h1 className="text-xl font-semibold">{`${year}${separator}${
          month < 10 ? `0${month}` : `${month}`
        }${separator}${date}`}</h1>
      </div>
      <div className="">
        <h1 className="text-5xl text-center m-24">{`${
          hour < 10 ? `0${hour}` : `${hour}`
        }${separator}${minute < 10 ? `0${minute}` : `${minute}`}${separator}${
          second < 10 ? `0${second}` : `${second}`
        }`}</h1>
      </div>
     
    </div>
  );
}
