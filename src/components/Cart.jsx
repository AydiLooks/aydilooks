import React from 'react'
import { useCartContext } from '../context/cardcontext'
import CartItem from './CartItem';
import './cart.css'
import { NavLink } from 'react-router-dom';


const goBack = () => {
  window.history.back();
}

export default function Cart() {
  const { cart, clearcart } = useCartContext();

  // console.log(cart);
  if (cart.length === 0) {
    return (
      <div className='mt-44 ml-24 text-center justify-center items-center'><p className='text-5xl'>No items in the Cart!!</p></div>
    )
  }

  return (
    <div className='mt-44 ml-24'>
      <div className="text-center justify-center items-center">
        <div className='cart-heading  grid grid-cols-5'>
          <p className='text-xl'>items</p>
          <p className='text-xl'>Price</p>
          <p className='text-xl'>Quantity</p>
          <p className='text-xl'>SubTotal</p>
          <p className='text-xl'>Remove</p>
        </div>
        <hr />
        <div className='cart-item'>
          {cart.map((curelm) => {
            return <CartItem key={curelm.id} {...curelm}></CartItem>
          })}
        </div>
      </div>
      <hr className='mr-28'></hr>
      {/* clear and continue btn */}
      <div className='mt-16 mr-28'>
        <button className='shopping' onClick={() => { goBack() }}>
          <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
          <span>Continue Shopping</span>
        </button>
        <button class="noselect" onClick={()=>{clearcart()}}><span class="text">Clear cart</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>

       
      </div>
      <div className='flex justify-center text-center mt-48'>
         <div className='bg-gray-300 w-96 rounded'> 
        <h1 className='text-3xl font-bold mt-12 mb-4'>ORDER SUMMARY</h1>
       
            <h2 className='ml-4'>SubTotal:<span className=' font-bold ml-24'>134334530</span></h2>
            <h2 className=' mb-2'>Shipping fee:<span className=' font-bold ml-32'>3</span></h2>
            <hr className='text-black'></hr>
            <h2 className='ml-4 mb-2 mt-2'>Order Total:<span className='font-bold ml-24'>Rs.643283503</span></h2>
        </div>
    </div>
      <div className='mt-20 mb-4 flex justify-center text-center'>
        <NavLink to="/payment">
        <button className='shopping' style={{backgroundColor:"orange"}}>
        <span>Proceed to Checkout</span>
          <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
          <path d="M149.309584 528.47523c0-11.2973 9.168824-20.466124 20.466124-20.466124h604.773963L586.466992 319.925427c-7.992021-7.992021-7.992021-20.947078 0-28.939099 4.001127-3.990894 9.240455-5.996574 14.46955-5.996574 5.239328 0 10.478655 1.995447 14.479783 5.996574l223.00912 223.00912c3.837398 3.837398 5.996574 9.046027 5.996574 14.46955 0 5.433756-2.159176 10.632151-5.996574 14.46955l-223.019353 223.029586c-7.992021 7.992021-20.957311 7.992021-28.949332 0-7.992021-8.002254-7.992021-20.957311 0-28.949332l188.073446-188.073446H169.775708c-11.2973 0-20.466124-9.158591-20.466124-20.466124z"></path>
          </svg>
         
        </button></NavLink></div>
      <div>
       
      </div>
    </div>

  )
}
