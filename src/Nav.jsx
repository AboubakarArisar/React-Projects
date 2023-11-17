import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <header className="flex justify-between bg-[#1a3d50]">
        <div className="logo  px-2 py-5">
          <span className="text-yellow-600 font-semibold text-2xl">Pindari Coders</span>
        </div>
        <div className="bar">
          <nav className="flex justify-center px-2 py-5">
          <Link to='/' className="m-2 hover:text-white delay-100 active:underline">Home</Link>
          <Link to='/Todo' className="m-2  hover:text-white delay-100 active:underline">Todo</Link>
          <Link to='/Calc' className="m-2  hover:text-white delay-100 active:underline" href="">Calculator</Link>
          <Link to='/StWatch' className="m-2  hover:text-white delay-100 active:underline" href="">Stop Watch</Link>
          <Link to='/Magic' className="m-2  hover:text-white delay-100 active:underline" href="">Magic Ball</Link>
          <Link to='/Colors' className="m-2  hover:text-white delay-100 active:underline" href="">Colors</Link>
        </nav>
        </div>
      </header>
    </>
  );
};

export const Footer = () => {
    return (
      <>
      <footer className="px-5 py-5 bg-black">
        <h1 className="font-semibold text-center text-white ">CopyRight © <span className="text-yellow-500 text-2xl">Pindari Coders</span></h1>
      </footer>
      </>
    );
  };
const Main = () => {
  return (
  <>
  <div className="container">
    <div className="Nav-content flex justify-evenly   items-center">
        <div className="right">
    <img  src="https://avatars.githubusercontent.com/u/116747262?v=4" className='rounded-full px-3 py-3'alt="AB" />
        </div>
        <div className="left">
    <span className="text-5xl m-5 text-white font-semibold">REACT</span>
    
    <span className="text-5xl  text-yellow-500 font-semibold">PRACTICE</span>
        </div>
    </div>
  </div>
  </>
  );
};

const Nav = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default Nav;
