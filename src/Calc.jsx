import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './calc.css';
import './Nav'

const Calc = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult(Number(number1) + Number(number2));
  };
  
  const handleSubtract = () => {
    setResult(Number(number1) - Number(number2));
  };
  
  const handleMultiply = () => {
    setResult(Number(number1) * Number(number2));
  };
  
  const handleDivide = () => {
    try {
      const resultValue = Number(number1) / Number(number2);
      if (isNaN(resultValue) || !isFinite(resultValue)) {
        throw new Error("Invalid division");
      }
      setResult(resultValue);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
        footer: 'bhai kiya krna chahta h tu'
      });
      
    }
  };
  
  const handlePercentage = () => {
    setResult((Number(number1)) % Number(number2));
  };
  
    const handleClear = () => {
    setResult('');
    setNumber1('');
    setNumber2('');
  };
  
  return (
    <>
    <div className="container">
   
    <div className="calc-container">
      <h1 className='text-center font-semibold  text-2xl'>Simple Calculator</h1>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <div className="input grid grid-cols-1">
          <input
          placeholder='Number 1'
            type="number"
            className="rounded m-3 text-center border-orange-400 border-2  font-semibold px-5 py-2"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
          <input
          placeholder='Number 2'
            type="number"
            className="rounded  m-3 text-center font-semibold border-orange-400 border-2 px-5 py-2"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </div>
     
        <div className="buttons  grid grid-cols-3">
          <button  className="px-5 py-2 bg-blue-400 hover:bg-blue-800 rounded-full h-16 w-16 m-5" onClick={handleAdd} type='submit'>
            +
          </button>
          <button className="px-5 py-2 bg-blue-400 hover:bg-blue-800 rounded-full h-16 w-16 m-5" onClick={handleSubtract} type='submit'>
            -
          </button>
          <button className="px-5 py-2 bg-blue-400 hover:bg-blue-800 rounded-full h-16 w-16 m-5" onClick={handleMultiply} type='submit'>
            &times;
          </button>
          <button className="px-5 py-2 bg-blue-400 hover:bg-blue-800 rounded-full h-16 w-16 m-5" onClick={handleDivide} type='submit'>
            &divide;
          </button>
          <button className="px-5 py-2 bg-blue-400 hover:bg-blue-800 rounded-full h-16 w-16 m-5" onClick={handlePercentage} type='submit'>
            %
          </button>
          <button className="px-5 py-2 bg-blue-300 hover:bg-blue-800 rounded-full h-16 w-16 m-5" onClick={handleClear} type='submit'>
            C
          </button>

        </div>
        <input type='text'placeholder='Result :' className='rounded  border-orange-400 border-2  text-center font-semibold m-3 px-5 py-2' value={result} readOnly />
      </form>
    </div>
    </div>
    </>
  );
};

export default Calc;
