import React, { useState } from "react";

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
          const newSec = (prevSeconds + 1) % 60;
          setMin((prevMinutes) => {
            const newMin = (prevMinutes + Math.floor(newSec / 60)) % 60;
            setHour((prevHours) =>
              prevMinutes === 59 && newSec === 0 ? prevHours + 1 : prevHours
            );
            return newMin;
          });
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
    setIsRunning(false);
    clearInterval(intId);
    setSec(0);
    setHour(0);
    setMin(0);
  };

  return (
    <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white'>
      <div className='flex space-x-2 bg-gray-800 rounded-lg p-4 shadow-xl'>
        <div className='w-16 h-16 flex items-center justify-center bg-gray-700 rounded-lg text-2xl font-semibold'>
          {hour < 10 ? "0" + hour : hour} :
        </div>
        <div className='w-16 h-16 flex items-center justify-center bg-gray-700 rounded-lg text-2xl font-semibold'>
          {min < 10 ? "0" + min : min} :
        </div>
        <div className='w-16 h-16 flex items-center justify-center bg-gray-700 rounded-lg text-2xl font-semibold'>
          {sec < 10 ? "0" + sec : sec}
        </div>
      </div>
      <div className='mt-8 flex space-x-4'>
        <button
          className='px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition'
          onClick={startHandle}
        >
          Start
        </button>
        <button
          className='px-6 py-2 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition'
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className='px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition'
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
