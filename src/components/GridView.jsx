import React from 'react'
import Product from './Product'
import './Component.css'
const GridView=({products})=>{
    return(
        <div className='justify-center mr-56'>
            <div className='grid grid-cols-3 gap-3'>
                {products.map((currelm,id)=>{
                   return <Product key={currelm.id}{...currelm}/>
                })}
            </div>
        </div>
    )
}
export default GridView;