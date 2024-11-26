import React, { useState } from "react";
import "./App.css";

const Magic = () => {
  const colors = ["green", "red", "black", "blue", "orange", "purple", "brown"];
  const [btnColor, setBtnColor] = useState("");

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    setBtnColor(colors[randomNumber]);
  };

  return (
    <>
      <div className='min-h-screen bg-gray-900 flex justify-center items-center'>
        <div className='magic-container flex justify-center items-center flex-col p-8 bg-gray-800 rounded-xl shadow-xl w-full max-w-md'>
          <div className='circle-container mb-6'>
            <div className='main-circle flex justify-center items-center'>
              <button
                className='w-40 h-40 rounded-full text-white font-semibold text-xl transition duration-300'
                onClick={handleClick}
                style={{ backgroundColor: btnColor }}
              >
                Click me
              </button>
            </div>
          </div>
          <div className='button flex justify-center items-center mb-6'>
            <button
              className='m-5 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300'
              onClick={() => setBtnColor("")}
            >
              Reset
            </button>
          </div>
          <div className='color-container flex justify-center items-center gap-4 flex-wrap'>
            {colors.map((color) => (
              <div
                key={color}
                className='color w-20 h-20 rounded-full transition-all duration-300 transform hover:scale-110 cursor-pointer'
                style={{ backgroundColor: color }}
                title={color} // Adding tooltip for color name
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Magic;
