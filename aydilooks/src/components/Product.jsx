import React,{ useState } from 'react';
import { NavLink }from"react-router-dom";
import './Component.css';
export default function Product(currele) {
    const{id,name,image,price,category}=currele;
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
     <NavLink to={`/singleproduct/${id}`}>
        <div className='drop-shadow-xl card'onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
            <figure>
                <img src={image} alt={name} style={{
            filter: isHovered ? 'brightness(70%)' : 'brightness(100%)'
          }}/>
                <figcaption className='font-mono font-semibold text-amber-600'>{category}</figcaption>
            </figure>
            <div className=''>
                <h3>{name}</h3>
                <p><b>Price:</b>&nbsp;&nbsp; ${price}.00</p>
            </div>
        </div>
      </NavLink>    
  )
}
