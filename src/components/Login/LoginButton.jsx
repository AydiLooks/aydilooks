import React from 'react'
import './LoginButton.css'
import { NavLink } from 'react-router-dom'


export default function LoginButton() {
  return (
    <div className='flex justify-center mt-44 '>
    <div className=' flex justify-center grid grid-rows-2 '>
      <h1 className='not-italic font-bold text-5xl text-red-300 text-center mt-8' >Welcome!!</h1>
      <div className='grid grid-cols-2'>
      <div className='m-4 mr-8 '>
        <h1 className='text-3xl text-gray-600'>
          Feel Free to shop:)
        </h1>
       <NavLink to="customer/"> <button className="button mt-4 h-3/4">CUSTOMER</button></NavLink>
       <br></br></div>
      <div className='m-4 ml-8'>
      <h1 className='text-3xl text-gray-600'>
          Feel Free to connect:)
        </h1>
        <NavLink to="/login/shopkeeper"> <button class="button mt-4 h-3/4">SHOPKEEPER</button></NavLink><br></br>
        </div>
      </div>
    </div>
    </div>
  )
}
