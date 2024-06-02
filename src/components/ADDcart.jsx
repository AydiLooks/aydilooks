import React, { useState } from 'react'
import CardAmountToggle from './CardAmountToggle';
import { NavLink } from 'react-router-dom';
import {useCartContext}from '../context/cardcontext'

export default function ADDcart({product}) {
    const{addtoCart}=useCartContext();
    const{id,colors,stock}=product;
    const[color,setColor]=useState(colors[0]);
    const[amount,setAmount]=useState(1);
    const setDecrease=()=>{
         amount>1?setAmount(amount-1):setAmount(1);
    };
    const setIncrease=()=>{
        amount<stock?setAmount(amount+1):setAmount(stock);
    };
  return (

    <div>
        <div className='colors'>
        <p>
            Colors:{
                colors.map((curColor,index)=>{
                       return<button key={index}style={{backgroundColor:curColor}} className={color===curColor?"w-4 h-4 rounded-full m-4":"w-4 h-4 rounded-full m-4 blur-sm"} 
                       onClick={() => setColor(curColor)}>
                        {color===curColor?<i className="fa fa-check" style={{color:'grey'}}></i>:null}
                    
                       </button>;
                       
                })
            }
        </p>
        </div>
        {/* add to cart */}
        <CardAmountToggle amount={amount} setDecrease={()=>{setDecrease(id)}} setIncrease={()=>{setIncrease(id)}}></CardAmountToggle>
        <NavLink to="/cart" onClick={()=>addtoCart(id,color,stock,amount,product)}>
        <button class="button">
        ADD to Cart
        <svg class="cartIcon" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
      </button>
        </NavLink>
        <br></br>
    </div>
  )
}
