import React from 'react'
import "./ADDcart.css"

export default function CardAmountToggle({ amount, setDecrease, setIncrease }) {
  return (
    <div>
      <div className='grid grid-cols-3'>
        {/* <button >-</button> */}
        <button onClick={setDecrease}
          className="group cursor-pointer outline-none hover:rotate-0 duration-300"
          title="Add New"
        >
          <svg
            className="stroke-red-400 fill-none group-hover:fill-red-800 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-width="1.5"
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            ></path>
            {/* <path stroke-width="1.5" d="M8 12H16"></path>
            <path stroke-width="1.5" d="M12 16V8"></path> */}
            <path stroke-width="1.5" d="M8 12H16"></path>

          </svg>
        </button>
        <p className='text-xl'>{amount}</p>
        {/* <button >+</button> */}
        <button onClick={setIncrease}
          title="Add New"
          className="group cursor-pointer outline-none hover:rotate-0 duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            className="stroke-red-400 fill-none group-hover:fill-red-800 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke-width="1.5"
            ></path>
            <path d="M8 12H16" stroke-width="1.5"></path>
            <path d="M12 16V8" stroke-width="1.5"></path>
          </svg>
        </button>

      </div>
      
    </div>
  )
}
