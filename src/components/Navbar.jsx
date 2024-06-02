import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/Themecontext';
import { NavLink } from 'react-router-dom';
import { useFilterContext } from '../context/filtercontext';
import { useAuth0 } from "@auth0/auth0-react";
import { useCartContext } from '../context/cardcontext';





export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const { womenselection, menselection } = useFilterContext();
  const{total_item}=useCartContext();

  const { theme, updateTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [show, setshow] = useState(false);
  console.log(show);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };

  const { loginWithRedirect, logout,isAuthenticated } = useAuth0();
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //  const handleThemeChange = () => {
  //   updateTheme({
  //     primaryColor: '#f39c12',
  //     secondaryColor: '#e74c3c',
  //     // Add other theme properties you want to update
  //   });
  // };

  const navbarBackgroundColor = scrollPosition > 0 ? 'bg-black' : ' ';

  return (
    <div className=''>
      <nav className="fixed top-0 w-full z-10 mb-4 " style={{ fontFamily: theme.font, fontSize: theme.size, color: theme.color ,backgroundColor:{navbarBackgroundColor}}}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setshow(!show)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Aydilooks"></img>
              </div>


              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  
                  <NavLink to="/" className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  " aria-current="page">Home</NavLink>
                  <NavLink to="/men" className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 ">Men</NavLink>
                  <NavLink to="/women" className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">Women</NavLink>
                  <NavLink to="/beauty" className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 ">Beauty</NavLink>
                  <NavLink to="/stationary" className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 ">Stationary</NavLink>

                </div>
              </div>
            </div>
            <div className="relative inline-block">
      <NavLink to="/cart">
        <button
          type="button"
          className="relative flex rounded-full text-sm focus:outline-none focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              {/* <!-- Profile dropdown --> */}
              <div className="relative ml-3">
                <div>
                  <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={toggleVisibility}>
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                  </button>
                </div>

                {isVisible ?
                  <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none div" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    {/* {isvisible ? document.getElementsByClassName('div').style.display="none":document.getElementsByClassName('div').style.display="block"} */}
                    {/* {isVisible ? 'Hide' : 'Show'} */}
                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                    <NavLink to="/login" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Log In</NavLink>
                    {/* {isAuthenticated?
                    (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>):
                    (<button onClick={() => loginWithRedirect()}>Log In</button>)
                    
                  } */}
                    
                    <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">My orders</NavLink>
                    
                    <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</NavLink>
                  </div>
                  : ""}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {show ?
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">

              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <NavLink to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</NavLink>
              <NavLink to="/men" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Men</NavLink>
              <NavLink to="/women" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Women</NavLink>
              <NavLink to="/beauty" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Beauty</NavLink>
            </div>
          </div>
          : ""}
      </nav>

    </div>
  )
}
