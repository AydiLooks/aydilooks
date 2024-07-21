import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Component.css';

export default function Product(currele) {
  const { id, name, image, price, category, company } = currele;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="max-w-sm mx-auto p-4">
        <div 
          className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            <img 
              className="w-full h-64 object-cover"
              src={image}
              alt={name}
              style={{
                filter: isHovered ? 'brightness(70%)' : 'brightness(100%)'
              }}
            />
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <span className="bg-black bg-opacity-50 text-white text-lg font-semibold py-2 px-4 rounded-lg">View Details</span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-gray-900 font-semibold text-xl mb-2">{name}</h3>
            <div className="flex items-center mt-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{category}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">${price}.00</span>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
