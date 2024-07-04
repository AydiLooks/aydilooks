import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Component.css';
import Star from './Star';

export default function Product(currele) {
  const { id, name, image, price, category,company,} = currele;
  const [isHovered, setIsHovered] = useState(false);
 
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="max-w-2xl mx-auto ">


        <div className="bg-white shadow-xl  rounded-lg max-w-sm dark:bg-white dark:border-gray-950  transition duration-300 ease-in-out transform hover:scale-105 " onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <a href="#">
            <img className="rounded-t-lg p-8" src={image} alt={name} style={{
            filter: isHovered ? 'brightness(70%)' : 'brightness(100%)'}}/>
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-black">{name}</h3>
            </a>
             <div className="flex items-center mt-2.5 mb-5">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{category}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}.00</span>
              {/* <a href="#" */}
                {/* // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add */}
                {/* // to cart</a> */}
            </div>
          </div>
        </div>


      </div>

    </NavLink>
  )
}
