import React, { useState } from 'react';
import { useCartContext } from '../../context/cardcontext';
import axios from '../../utills/axios'; 
import { cuteAlert } from 'cute-alert';

export default function TotalBilling() {
  const { total_item, cart, shipping_fee, clearcart } = useCartContext();
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
    payment: '',
  });

  const subtotal = cart.reduce((accumulator, item) => {
    // Calculate the total price for the current item
    const itemTotal = item.amount * item.price;
    
    // Add the item total to the accumulator
    return accumulator + itemTotal;
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        order_items: cart.map(item => ({
          product_id: item.id,  // Updated to match your serializer field
          quantity: item.amount,
        })),
        // shipping_fee,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        payment_method: formData.payment,  // Renamed to match your serializer field
      };

      const authToken = localStorage.getItem('access_token'); // access token in local storage

      const response = await axios.post('/api/v1/p/orders/', orderData, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });
      clearcart();
      cuteAlert({
        type: 'success',
        title: 'Order Confirmed',
        description: 'Thank you! Enjoy happy shopping :)',
      });
      console.log('Order created successfully:', response.data);
      // Handle successful response
    } catch (error) {
      console.error('Error creating order:', error.response ? error.response.data : error.message);
      console.log(cart);
      // Handle error
    }
  };

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2'>
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Shipping Form</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" required />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                  <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" required />
                </div>

                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
                  <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" required />
                </div>
              </div>

              <div>
                <label htmlFor="payment" className="block text-sm font-medium text-gray-700">Mode of Payment</label>
                <div>
                  <label className="mr-4">
                    <input type="radio" id="payment_cash" name="payment" value="cash" onChange={handleInputChange} required /> Cash on Delivery
                  </label>
                </div>
              </div>

              <div className="text-right">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <aside className='flex justify-center text-center mt-56 h-56'>
          <div className='bg-gray-300 w-96 rounded'>
            <h1 className='text-3xl font-bold mt-12 mb-4'>ORDER SUMMARY</h1>
            <h2 className='ml-4'>Total items:<span className='font-bold ml-24'>{total_item}</span></h2>
            <h2 className='ml-4'>SubTotal:<span className='font-bold ml-16'>{subtotal}</span></h2>
            <h2 className='mb-2'>Shipping fee:<span className='font-bold ml-16'>{shipping_fee}</span></h2>
            <hr className='text-black'></hr>
            <h2 className='ml-4 mb-2 mt-2'>Order Total:<span className='font-bold ml-24'>{subtotal + shipping_fee}</span></h2>
          </div>
        </aside>
      </div>
    </>
  );
}
