import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='bg-[#1a3d50]'>
      <div className='flex items-center justify-between px-5 py-4'>
        <div className='text-yellow-600 font-bold text-2xl'>Pindari Coders</div>

        <button
          className='block md:hidden text-yellow-600'
          onClick={handleMenuToggle}
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
          className={`md:flex md:items-center md:space-x-5 bg-[#1a3d50] font-semibold md:bg-transparent absolute md:static left-0 right-0 top-full md:top-auto px-5 md:px-0 py-3 md:py-0 z-10`}
        >
          <Link
            to='/'
            className='block text-yellow-400 hover:text-white transition duration-200'
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to='/Todo'
            className='block text-yellow-400 hover:text-white transition duration-200'
            onClick={handleLinkClick}
          >
            Todo
          </Link>
          <Link
            to='/Calc'
            className='block text-yellow-400 hover:text-white transition duration-200'
            onClick={handleLinkClick}
          >
            Calculator
          </Link>
          <Link
            to='/StWatch'
            className='block text-yellow-400 hover:text-white transition duration-200'
            onClick={handleLinkClick}
          >
            Stop Watch
          </Link>
          <Link
            to='/Magic'
            className='block text-yellow-400 hover:text-white transition duration-200'
            onClick={handleLinkClick}
          >
            Magic Ball
          </Link>
          <Link
            to='/Colors'
            className='block text-yellow-400 hover:text-white transition duration-200'
            onClick={handleLinkClick}
          >
            Colors
          </Link>
        </nav>

        <div
          className={`fixed top-0 right-0 w-2/3 bg-[#1a3d50] h-full transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden z-20`}
        >
          <button
            onClick={handleMenuToggle}
            className='text-yellow-600 absolute top-4 right-4'
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
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <div className='flex flex-col justify-center font-semibold items-center gap-6 h-1/2'>
            <Link
              to='/'
              className='text-yellow-400 hover:text-white transition duration-200'
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to='/Todo'
              className='text-yellow-400 hover:text-white transition duration-200'
              onClick={handleLinkClick}
            >
              Todo
            </Link>
            <Link
              to='/Calc'
              className='text-yellow-400 hover:text-white transition duration-200'
              onClick={handleLinkClick}
            >
              Calculator
            </Link>
            <Link
              to='/StWatch'
              className='text-yellow-400 hover:text-white transition duration-200'
              onClick={handleLinkClick}
            >
              Stop Watch
            </Link>
            <Link
              to='/Magic'
              className='text-yellow-400 hover:text-white transition duration-200'
              onClick={handleLinkClick}
            >
              Magic Ball
            </Link>
            <Link
              to='/Colors'
              className=' text-yellow-400 hover:text-white transition duration-200'
              onClick={handleLinkClick}
            >
              Colors
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
