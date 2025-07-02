import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    },1000)
  },[])
  return <>
  <h1 style={{color: "#ffffff"}} className="text-center text-8xl mb-8">Live Clock</h1>
    <div style={{backgroundColor: "#e83f6f"}} className="rounded-3xl flex flex-wrap py-2 px-3 h-96 w-3xl transition-all duration-300 ease-in-out hover:shadow-lg justify-center items-center">
    <div style={{backgroundColor: "#ffbf00"}} className="text-center flex flex-wrap justify-center h-40 w-2xl items-center rounded-2xl">
  <input  className="text-center h-14 w-48 text-5xl" value={time} readOnly/>
    </div>
    </div>
  </>;
}

export default App;
