import React, { useState } from 'react'
import CardAmountToggle from './CardAmountToggle';

export default function ADDcart({product}) {
    const{id,colors,stock}=product;
    const[color,setColor]=useState(colors[0]);
    const[amount,setAmount]=useState();
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
        <CardAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}></CardAmountToggle>
    </div>
  )
}
