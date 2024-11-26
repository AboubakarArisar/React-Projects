import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-[#1a3d50]'>
      <div className='flex items-center justify-between px-5 py-4'>
        <div className='text-yellow-600 font-bold text-2xl'>Pindari Coders</div>

        <button
          className='block md:hidden text-yellow-600'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className='w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-5 bg-[#1a3d50] md:bg-transparent absolute md:static left-0 right-0 top-full md:top-auto px-5 md:px-0 py-3 md:py-0 z-10`}
          style={{
            backgroundColor: isMenuOpen ? "#1a3d50" : "transparent",
            top: isMenuOpen ? "100%" : "auto",
          }}
        >
          <Link
            to='/'
            className='block text-yellow-400 hover:text-white transition duration-200'
          >
            Home
          </Link>
          <Link
            to='/Todo'
            className='block text-yellow-400 hover:text-white transition duration-200'
          >
            Todo
          </Link>
          <Link
            to='/Calc'
            className='block text-yellow-400 hover:text-white transition duration-200'
          >
            Calculator
          </Link>
          <Link
            to='/StWatch'
            className='block text-yellow-400 hover:text-white transition duration-200'
          >
            Stop Watch
          </Link>
          <Link
            to='/Magic'
            className='block text-yellow-400 hover:text-white transition duration-200'
          >
            Magic Ball
          </Link>
          <Link
            to='/Colors'
            className='block text-yellow-400 hover:text-white transition duration-200'
          >
            Colors
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
