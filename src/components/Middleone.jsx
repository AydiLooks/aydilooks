import React from 'react';
import { Link } from 'react-scroll';

export default function Middleone() {
  return (
    <div className='banner-area grid grid-cols-1 md:grid-cols-2 relative overflow-hidden'>
      <div className='text mt-8 md:mt-56 sm:mt-96 px-5 sm:px-10 lg:px-20 z-10'>
        <h1 className='font-bold text-3xl md:text-5xl mt-10 sm:mt-20 lg:mt-0'>
          Elegance is not standing out, but being remembered.
        </h1>
        <br />
        <p>Get into the world of fashion and style.</p>
        <h1 className='font-bold'>
          Elevate Your style, simplify your shopping.
        </h1>
        <p>Fashion at your doorstep at just one click.</p>
        <Link to="featured" smooth={true} duration={500}>
          <button className="group relative bg-gray-800 h-16 w-64 border border-gray-700 text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden mt-8 hover:bg-gray-700 hover:border-gray-600">
            Explore more
            <span className="group-hover:before:duration-500 group-hover:after:duration-500 before:duration-500 after:duration-500 hover:duration-500 before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-rose-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg" />
          </button>
        </Link>
      </div>
      <div className='img pt-32 mt-32 md:pt-0'>
        {/* <img src={myimage} alt="Your Image" className="max-w-full" /> */}
      </div>
      <div className='absolute inset-0 z-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-50 blur-md'></div>
    </div>
  );
}
