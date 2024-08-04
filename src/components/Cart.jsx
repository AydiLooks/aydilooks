import React, { useContext, useState } from 'react'
import { useCartContext } from '../context/cardcontext'
import CartItem from './CartItem';
import './cart.css'
import { NavLink } from 'react-router-dom';
import CustomerLogin from './Login/CustomerLogin';
import { AuthContext } from '../utills/CheckAuth';


const goBack = () => {
  window.history.back();
}

export default function Cart() {
  const { total_item, cart, shipping_fee ,clearcart} = useCartContext();
  const {isAuthenticated}=useContext(AuthContext);
  const subtotal = cart.reduce((accumulator, item) => {
    // Calculate the total price for the current item
    const itemTotal = item.amount * item.price;
    
    // Add the item total to the accumulator
    return accumulator + itemTotal;
  }, 0);

  // console.log(cart);
  if (!isAuthenticated) {
    return <CustomerLogin />;
  }
  if (cart.length === 0) {
    return (
      <div className='mt-44 ml-24 text-center justify-center items-center'><p className='text-5xl'>No items in the Cart!!</p></div>
    )
  }

  return (
    <div className="mt-44 mx-4 lg:mx-24">
      <div className="text-center">
        <div className="cart-heading grid grid-cols-2 gap-4 sm:grid-cols-5 text-center border-b border-gray-300 ">
          <p className="text-xl">Items</p>
          <p className="text-xl hidden sm:block">Price</p>
          <p className="text-xl hidden sm:block">Quantity</p>
          <p className="text-xl hidden sm:block">SubTotal</p>
          <p className="text-xl hidden sm:block">Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((curelm) => (
            <CartItem key={curelm.id} {...curelm} />
          ))}
        </div>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="mt-16 flex flex-col sm:flex-row justify-between items-center">
        <button className="shopping mb-4 sm:mb-0" onClick={goBack}>
          <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
          </svg>
          <span>Continue Shopping</span>
        </button>
        <button className="noselect" onClick={clearcart}>
          <span className="text">Clear cart</span>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="flex justify-center text-center mt-48">
        <div className="bg-gray-300 w-full sm:w-96 rounded p-4">
          <h1 className="text-3xl font-bold mb-4">ORDER SUMMARY</h1>
          <h2 className="flex justify-between mb-2">
            Total items:<span className="font-bold">{total_item}</span>
          </h2>
          <h2 className="flex justify-between mb-2">
            SubTotal:<span className="font-bold">{subtotal}</span>
          </h2>
          <h2 className="flex justify-between mb-2">
            Shipping fee:<span className="font-bold">{shipping_fee}</span>
          </h2>
          <hr className="my-2" />
          <h2 className="flex justify-between mt-2">
            Order Total:<span className="font-bold">{subtotal+shipping_fee}</span>
          </h2>
        </div>
      </div>
      <div className="mt-20 mb-4 flex justify-center">
        <NavLink to="/orders/">
          <button className="shopping" style={{ backgroundColor: "orange" }}>
            <span>Proceed to Checkout</span>
            <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
              <path d="M149.309584 528.47523c0-11.2973 9.168824-20.466124 20.466124-20.466124h604.773963L586.466992 319.925427c-7.992021-7.992021-7.992021-20.947078 0-28.939099 4.001127-3.990894 9.240455-5.996574 14.46955-5.996574 5.239328 0 10.478655 1.995447 14.479783 5.996574l223.00912 223.00912c3.837398 3.837398 5.996574 9.046027 5.996574 14.46955 0 5.433756-2.159176 10.632151-5.996574 14.46955l-223.019353 223.029586c-7.992021 7.992021-20.957311 7.992021-28.949332 0-7.992021-8.002254-7.992021-20.957311 0-28.949332l188.073446-188.073446H169.775708c-11.2973 0-20.466124-9.158591-20.466124-20.466124z"></path>
            </svg>
          </button>
        </NavLink>
      </div>
    </div>


  )
}
