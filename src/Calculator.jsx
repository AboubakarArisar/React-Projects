import React, { useState } from "react";
import Swal from "sweetalert2";
import "./calc.css";

const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const handleAdd = () => {
    setResult(Number(number1) + Number(number2));
    handleClear();
  };

  const handleSubtract = () => {
    setResult(Number(number1) - Number(number2));
    handleClear();
  };

  const handleMultiply = () => {
    setResult(Number(number1) * Number(number2));
    handleClear();
  };

  const handleDivide = () => {
    try {
      const resultValue = Number(number1) / Number(number2);
      if (isNaN(resultValue) || !isFinite(resultValue)) {
        throw new Error("Invalid division");
      }
      setResult(resultValue);
      handleClear();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Cannot divide by zero!",
        footer: "Please enter a valid number",
      });
    }
  };

  const handlePercentage = () => {
    setResult(Number(number1) % Number(number2));
  };

  const handleClear = () => {
    // setResult("");
    setNumber1("");
    setNumber2("");
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900'>
      <div className='calc-container bg-transparent shadow-lg rounded-lg p-8 w-full max-w-lg'>
        <form onSubmit={(e) => e.preventDefault()} className='space-y-6'>
          <div className='space-y-4'>
            <input
              placeholder='Number 1'
              type='number'
              className='w-full p-3 border rounded-lg text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400'
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
            />
            <input
              placeholder='Number 2'
              type='number'
              className='w-full p-3 border rounded-lg text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400'
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
            />
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <button
              onClick={handleAdd}
              className='p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300'
            >
              +
            </button>
            <button
              onClick={handleSubtract}
              className='p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300'
            >
              -
            </button>
            <button
              onClick={handleMultiply}
              className='p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300'
            >
              &times;
            </button>
            <button
              onClick={handleDivide}
              className='p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300'
            >
              &divide;
            </button>
            <button
              onClick={handlePercentage}
              className='p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300'
            >
              %
            </button>
            <button
              onClick={handleClear}
              className='p-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300'
            >
              C
            </button>
          </div>
          <div className='mt-6'>
            <input
              type='text'
              placeholder='Result'
              readOnly
              className='w-full p-3 border rounded-lg text-center font-bold bg-gray-100 text-gray-800'
              value={result}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
