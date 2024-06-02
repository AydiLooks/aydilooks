import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function TotalBilling() {

  return (
    <>
      <div className='grid grid-cols-2'>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Shipping Form</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="fullName" name="fullName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" required />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" id="address" name="address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" required />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input type="text" id="city" name="city" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <input type="text" id="state" name="state" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" required />
            </div>

            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
              <input type="text" id="zip" name="zip" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" required />
            </div>
          </div>
          <div>
              <label htmlFor="payment" className="block text-sm font-medium text-gray-700">Mode of Payment</label>
              <input type="radio" id="payment" name="payment" className=" ml-2 mr-4" required />
              Cash on Delivery
              <input type="radio" id="payment" name="payment" className=" ml-4 mr-4" required/>
              Online
             
            </div>
             

          <div className="text-right">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
          </div>
        </form>
      </div>
    </div>



        
        {/* <div id='#payment'>dissm</div> */}
        <aside className='flex justify-center text-center mt-56 h-56'>
          <div className='bg-gray-300 w-96 rounded'>
            <h1 className='text-3xl font-bold mt-12 mb-4 '>ORDER SUMMARY</h1>

            <h2 className='ml-4'>SubTotal:<span className=' font-bold ml-24'>134334530</span></h2>
            <h2 className=' mb-2'>Shipping fee:<span className=' font-bold ml-32'>3</span></h2>
            <hr className='text-black'></hr>
            <h2 className='ml-4 mb-2 mt-2'>Order Total:<span className='font-bold ml-24'>Rs.643283503</span></h2>
          </div>
        </aside>
      </div>
    </>
  )
}
