import React from 'react'
import { useCartContext } from '../context/cardcontext'

export default function Cart() {
    const {cart}=useCartContext();
    console.log(cart);
  return (
    <div className='mt-44 ml-24'>
        <div className="container text-center justify-center items-center">
            <div className='cart_heading grid grid-cols-5'>
                <p>items</p>
                <p className='cart-hide'>Price</p>
                <p>Quantity</p>
                <p className='cart-hide'>SubTotal</p>
                <p>Remove</p>
            </div>
            <hr/>
        </div>
    </div>
  )
}
