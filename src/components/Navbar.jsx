import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/Themecontext';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cardcontext';

export default function Navbar({ user }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { total_item } = useCartContext();
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=''>
      <nav className="fixed top-0 w-full z-10 bg-red-200" style={{ fontFamily: theme.font, fontSize: theme.size, color: theme.color }}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setShow(!show)}
              >
                <span className="sr-only">Open main menu</span>
                {show ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
              <img className="h-8 w-auto ml-2" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Aydilooks" />
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center hidden sm:block">
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Aydilooks" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink to="/" className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2" aria-current="page">Home</NavLink>
                  <NavLink to="/products" className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">All Products</NavLink>
                </div>
              </div>
              <div className="hidden sm:flex sm:items-center">
                <NavLink to="shopkeeper/" className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 mx-auto">Become a Supplier</NavLink>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative inline-block">
                  <NavLink to="/cart">
                    <button
                      type="button"
                      className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          background: "#ff0000",
                          color: "#fff",
                          padding: "1px 6px",
                          borderRadius: "50%",
                          position: "absolute",
                          top: "-4px",
                          right: "-4px",
                          verticalAlign: "top",
                          zIndex: 10
                        }}
                        className='rounded-full'
                      >
                        {total_item}
                      </span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://tse4.mm.bing.net/th?id=OIP.eS2jtQlEpqMtlq3Zy6YU_gHaHa&pid=Api&P=0&h=220"
                        alt="Cart"
                      />
                    </button>
                  </NavLink>
                </div>
                <div className="relative ml-2">
                  <div>
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onMouseEnter={() => setIsVisible(true)}
                      onMouseLeave={() => setIsVisible(false)}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </button>
                  </div>
                  {isVisible && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      onMouseEnter={() => setIsVisible(true)}
                      onMouseLeave={() => setIsVisible(false)}
                    >
                      {!user ? (
                        <>
                          <NavLink to="customer/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Register</NavLink>
                          <NavLink to="login/customer" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Login</NavLink>
                        </>
                      ) : (
                        <NavLink to="logout/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Logout</NavLink>
                      )}
                      <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">My orders</NavLink>
                      <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Delete Account</NavLink>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {show && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <NavLink to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</NavLink>
              <NavLink to="/products" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">All Products</NavLink>
              <NavLink to="shopkeeper/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Become a Supplier</NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
