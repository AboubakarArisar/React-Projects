import React, { useState, useEffect } from "react";
import "./App.css";
export const StWatch = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intId, setIntId] = useState(null);

  const startHandle = () => {
    if (!isRunning) {
      setIsRunning(true);
      const secId = setInterval(() => {
        setSec((prevSeconds) => {
          var newSec = (prevSeconds + 1) % 60;
          setMin((prevMinutes) => {
            console.log("i am newSec "+newSec);
            var newMin = (prevMinutes + Math.floor((newSec) / 60)) % 60;
            setHour((prevHours) => prevHours + Math.floor((prevMinutes + 1) / 60));
          
            return newMin;
          }
          )
          return newSec;
        });
      }, 1000);
      setIntId(secId);
    }
  };
  const handlePause = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intId);
    }
  };

  const handleReset = () => {
    
    setSec(0);
    setHour(0);
    setMin(0);
  };

  return (
    <>
      <div className="container flex-col">
        <div>
          <h1 className="text-center text-white">Stop Watch</h1>
        </div>
        
        <div className="st-content flex justify-center items-center">
          <div className="hrs w-12 h-12  flex justify-center items-center text-white">
            {hour < 10 ? "0" + hour + " :" : hour + " :"}
          </div>
          <div className="mins w-12 h-12  flex justify-center items-center text-white">
            {min < 10 ? "0" + min + " :" : min + " :"}
          </div>
          <div className="secs w-12 h-12  flex justify-center items-center text-white">
            {sec < 10 ? "0" + sec : sec}
          </div>
        </div>
        <div className="buttons">
          <button className="mt-2 ml-2 bg-blue-200" onClick={startHandle}>
            Start
          </button>
          <button className="mt-2 ml-2 bg-blue-200" onClick={handlePause}>
            Pause
          </button>
          <button className="mt-2 ml-2 bg-blue-200" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
