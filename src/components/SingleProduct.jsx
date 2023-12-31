import React, { useEffect } from 'react';
import{useParams}from"react-router-dom";
import { useProductContext } from '../context/productcontext';
import PageNavigator from './Pagenavigator';
import MyImage from './MyImage';



const API="https://api.pujakaitem.com/api/products";
export default function SingleProduct() {
    const{isSingleloading,getsingleproduct,singleProduct}=useProductContext();
    const{id}=useParams();
    const{
        name,
        company,
        price,
        category,
        stock,
        description,
        stars,
        image,
        reviews,
        id:alias}=singleProduct
    useEffect(()=>{
        getsingleproduct(`${API}?id=${id}`);
    })

    if(isSingleloading){
      return <div className=''>Loading...</div>
    }
  return (
    <div>
      <PageNavigator title={name}/>
      <div>
        <div className='grid grid-col-2'>
          {/* product image */}
          <div className='product_images'>
            <MyImage imgs={image}/>
          </div>
          {/* product data */}
          <div className='product data'>
             <h2>{name}</h2>
             <p>{stars}</p>
             <p>{reviews}</p>
          
          <p className='product -price'>
            MRP:
            <del>{price+2500}</del>
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}
