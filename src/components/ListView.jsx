import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Component.css';

export default function ListView({ products }) {
    console.log(products);
    

    return (
        <div>
            <div className=''>
                {
                    products.map((currelm) => {
                        const { id, name, image, description, price} = currelm;
                        return (
                            // <div className='grid grid-cols-2 gap-2 mb-16 border-2 p-10 pb-0 h-4/6'>
                            //     <img src={image} alt={name} className='h-5/6'></img>
                            //     <div className='about-product'>
                            //         <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-black">{name}</h3>
                            //         <p className='mb-10'>{price}</p>
                            //         <p className=''>{description.slice(0,99)}...</p>
                            //         <NavLink to={`/singleproduct/${id}`}>
                            //         <button className='btn2 ml-56 mt-28'>See More</button>
                            //         </NavLink>
                                   
                            //     </div>
                            // </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 border-2 p-4 md:p-10 pb-0 h-auto md:h-4/6'>
    <img src={image} alt={name} className='h-60 md:h-auto'></img>
    <div className='about-product'>
        <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-black">{name}</h3>
        <p className='mb-2'>{price}</p>
        <p className='mb-4'>{description.slice(0, 99)}...</p>
        <NavLink to={`/singleproduct/${id}`}>
            <button className='btn2'>See More</button>
        </NavLink>
    </div>
</div>

                        )
                    })
                }
            </div>
        </div>
    )
}
