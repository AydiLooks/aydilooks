import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useProductContext } from '../context/productcontext';
import PageNavigator from './Pagenavigator';
import MyImage from './MyImage';
import Star from './Star';
import { useTheme } from '../context/Themecontext';
import './Component.css';
import ADDcart from './ADDcart';



const API = "https://api.pujakaitem.com/api/products";
export default function SingleProduct() {
  const{theme,updateTheme}=useTheme();
  const { isSingleloading, getsingleproduct, singleProduct } = useProductContext();
  const { id } = useParams();
  const {
    name,
    company,
    price,
    category,
    stock,
    description,
    stars,
    image,
    reviews,
    id: alias } = singleProduct
  useEffect(() => {
    getsingleproduct(`${API}?id=${id}`);
  }, []);

  if (isSingleloading) {
    return <div className=''>Loading...</div>

  }
  return (
    <div className='mt-16'>
      <PageNavigator title={name} />
      <div>
        <div className='content'>
          {/* product image */}
          <div className='rounded-t-lg p-8'>
            <MyImage imgs={image} />
          </div>
          {/* product data */}
          <div className=''>
            <h2 className='text-6xl mb-4'>{name}</h2>
            <Star star={stars} review={reviews}/>
            <p  style={{fontFamily:theme.font,fontSize:theme.size}} className='text-lg'>
              MRP:&nbsp;
              <del>{price + 2500}</del>
            </p>
            
            <p  style={{fontFamily:theme.font,fontSize:theme.size}} className='text-lg text-blue-700'>Deal of the Day:{price}</p>
            <p  style={{fontFamily:theme.font,fontSize:theme.size}} className='text-lg mb-4'>{description}</p>
            <div className='grid grid-cols-3 gap-3 mb-4'>
            <p style={{color:!theme.color}}>  <i className="fa fa-truck"style={{color:"grey"}}></i><br></br>Free Delivery</p>
            <p style={{color:!theme.color}}>  <i class="fa fa-exchange"style={{color:"grey"}} ></i><br></br>Easy Exchange</p>
            <p style={{color:!theme.color}}>   <i class="fa fa-shield" style={{color:"grey"}}></i><br></br>Warranty</p>
           
          

            </div>
            <hr style={{ borderColor: 'grey' }}></hr><br></br>
            <p style={{fontFamily:theme.font,color:!theme.color}}>Available:&nbsp;{stock > 0 ? "In stock" : "Not in stock"}</p>
            
            <p style={{fontFamily:theme.font,color:!theme.color}}>Id:&nbsp;{alias}</p>
            <p style={{fontFamily:theme.font,color:!theme.color}}>Brand:&nbsp;{company}</p>
            <br></br>
            <hr style={{ borderColor: 'black',borderWidth:"2px" }}></hr>
            {stock>0 && <ADDcart product={singleProduct}/>}
          </div>
        </div>
      </div>
    </div>
  )
}
