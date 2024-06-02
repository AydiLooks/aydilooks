import React from 'react'
import myimage from '../assets/39ebac85e4e5bdb06af7eafe1066a524-removebg-preview.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll';
// import Featuredproducts from './Featuredproducts'


export default function Middleone () {
  return (
<div className='banner-area grid grid-cols-1 md:grid-cols-2'>
             {/* <div class="ball" style={{top: "20vh", left: "95vw"}}></div>
          <div class="ball" style={{top: "50vh", left: "40vw"}}></div>
          <div class="ball" style={{top: "30vh", left: "70vw"}}></div>
          <div class="ball" style={{top: "70vh", left: "10vw"}}></div> */}


      <div className='text mt-8 md:mt-56' style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <h1 className='font-bold text-3xl md:text-5xl'>Elegance is not standing out, but being remembered.</h1><br></br>
        <p>Get into the world of fashion and style.</p>
        <h1 className='font-bold'>Elevate Your style, simplify your shopping.</h1>
        <p>Fashion at your doorstep at just one click.</p>
        <Link to="featured" smooth={true} duration={500}>
        <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline  hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg mt-8">
  Explore more
</button>
</Link>


      </div>
      <div className='img pt-32 mt-32 md:pt-0'>
        <img src={myimage} alt="Your Image" className="max-w-full" />
      </div>
    </div>


  )
}
