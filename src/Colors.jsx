import { React, useState } from "react";
import Swal from "sweetalert2";

const Colors = () => {
  const [randomColor, setRandomColor] = useState([]);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    const colorsArray = [];
    for (let i = 0; i < 6; i++) {
      colorsArray.push(
        `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`
      );
    }
    setRandomColor(colorsArray);
    setFlag(true);
  };

  const handleCopy = (item) => {
    navigator.clipboard.writeText(`${item}`);
    Swal.fire("Color code copied");
  };

  const handleDelete = (item) => {
    if (randomColor.length <= 2) return;
    setRandomColor(randomColor.filter((colorItem) => colorItem !== item));
  };

  return (
    <>
      <div className='w-full min-h-screen bg-gray-900 flex justify-start items-center flex-col gap-4 p-4'>
        <div className='button'>
          <button className='bg-yellow-400 p-4 rounded' onClick={handleClick}>
            Get Colors
          </button>
        </div>
        {flag && (
          <div className='w-full h-screen flex flex-col md:flex-row justify-center items-center'>
            {randomColor.map((item, index) => {
              const widthPercentage = (100 / randomColor.length).toFixed(2);
              return (
                <div
                  key={index}
                  className={`flex justify-center items-center w-full md:w-[${widthPercentage}%] h-20 md:h-full`}
                  style={{ backgroundColor: item }}
                >
                  <div className='items'>
                    <i
                      className='flex justify-center item-center cursor-pointer m-5 hover:bg-transparent hover:scale-50'
                      onClick={() => handleCopy(item)}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.8}
                        stroke='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z'
                        />
                      </svg>
                    </i>
                    <i
                      className='flex justify-center item-center cursor-pointer m-5 hover:bg-transparent hover:scale-50'
                      onClick={() => handleDelete(item)}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.8}
                        stroke='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                        />
                      </svg>
                    </i>
                    <h6 className='font-semibold uppercase'>{item}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Colors;
