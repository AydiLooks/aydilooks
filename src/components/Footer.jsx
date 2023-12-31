// Footer.js

import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Footer.css'; // Add your CSS styles for the footer in Footer.css file

const Footer = () => {
  return (
    <footer className="bg-black text-white font-normal w-full h-full pt-14 pr-4 pl-4 mt-14">
      <div className="grid grid-cols-3 gap-4">
        <div className="float-left">
          <h2>About Us</h2>
          <p>
            Your e-commerce store's mission statement or <br></br>a brief description can go here.
          </p>
          {/* Add more content or links if needed */}
        </div>

        <div className="text-center">
        <h2 className="">Contact Us</h2>
          <p>
            Address: 123 Main Street, City, Country
          </p>
          <p>
            Email: info@example.com
          </p>
          {/* Add more contact information if needed */}
        </div>

        <div className="justify-end">
          
          <ul className='grid grid-cols-4 gap-4'>
            <li><NavLink to="/"className="hover:text-blue-500">Home</NavLink></li>
            <li><NavLink to="/products"className="hover:text-blue-500">Products </NavLink></li>
            <li><NavLink to="/about"className="hover:text-blue-500">About</NavLink></li>
            <li><NavLink to="/contact"className="hover:text-blue-500">Contact</NavLink></li>
            {/* Add more links as needed */}
          </ul>
        </div>

        
      </div>
      <br></br>
      <div className="text-center animate-pulse">
        <p>&copy; {new Date().getFullYear()}&nbsp;AYDILOOKS</p>
        {/* You can include additional information like copyright */}
      </div>
    </footer>
  );
};

export default Footer;
