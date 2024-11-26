import React from "react";

const Main = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-900 py-10'>
      <div className='flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-10'>
        <div className='text-center md:text-left'>
          <span className='block text-5xl text-white font-semibold'>REACT</span>
          <span className='block text-5xl text-yellow-500 font-semibold'>
            PRACTICE
          </span>
        </div>
      </div>
    </div>
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
