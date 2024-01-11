import React, { useState } from 'react'

export default function ADDcart({product}) {
    const{id,colors,stock}=product;
    const[color,setColor]=useState(colors[0]);
  return (

    <div>
        <div className='colors'></div>
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
  )
}
