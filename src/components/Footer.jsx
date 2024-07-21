import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-normal w-full pt-12 px-6 mt-14 min-h-screen flex flex-col justify-between">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-lg mb-2"><strong>Your Campus Convenience, Delivered!</strong></p>
          <p className="mb-2">Welcome to AydiLooks, your go-to e-commerce platform tailored to meet all the needs of our college community. We understand the hustle and bustle of student life, and our mission is to ensure you have everything you need, right when you need it.</p>
          <p className="mb-2">From textbooks to tech gadgets, snacks to stationery, and everything in between, we’ve got you covered. Our goal is to provide a seamless shopping experience, with fast and reliable delivery right to your doorstep.</p>
          <p>Join us in making college life easier and more convenient. Happy shopping!</p>
        </div>

        <div className="mb-8 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">Address: KIET Group Of Institution<br/>Muradnagar<br/>Pincode: 201206</p>
          <p>Email: <a href="mailto:aydilooks@gmail.com" className="text-blue-400 hover:text-blue-300">aydilooks@gmail.com</a></p>
        </div>

        <div className="mb-8 md:mb-0 text-center md:text-right">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><NavLink to="/" className="hover:text-blue-400">Help</NavLink></li>
            <li><NavLink to="/products" className="hover:text-blue-400">Follow Us</NavLink></li>
            <li><NavLink to="/about" className="hover:text-blue-400">Company</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-400">Policies</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700 mt-8 animate-pulse">
        <p>&copy; {new Date().getFullYear()} AYDILOOKS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
