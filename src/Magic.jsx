import React, { useState } from 'react';
import './Magic.css';
import './App.css';

const Magic = () => {
  const colors = ["green", "red", "black", "blue", "orange", "purple", "brown"];
  const [btnColor,setBtnColor] = useState('');
  const handleClick = ()=>{
    const randomNumber = Math.floor(Math.random() * 8);
    setBtnColor(colors[randomNumber]);

  }
  return (
    <>
    
      <div className="container">
        
        <div className="magic-container flex justify-center items-center flex-col">
            <h1 className='mb-10 font-semibold text-yellow-500 text-3xl text-center'>Magic Ball Game</h1>
          <div className="circle-container">
            <div className="main-circle flex justify-center items-center flex-col">
              <button className='hover:bg-transparent text-white' onClick={handleClick} style={{background:btnColor}}>Click me</button>
              
           </div>
            <div className="button flex justify-center items-center">
            <button className='m-5 bg-cyan-500' onClick={()=>{
                setBtnColor('')
            }}>Reset</button>
            </div>
          </div>
          <div className="color-container flex justify-center items-center gap-3 m-5">
            {colors.map((color) => (
              <div className="color border-2 border-white w-16 h-16 rounded-full" style={{ background: color }} key={color}></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Magic;
