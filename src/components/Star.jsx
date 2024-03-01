import React from 'react'
import { useTheme } from '../context/Themecontext';


export default function Star({star,review}) {
  const { theme, updateTheme } = useTheme();
  const ratingstar=Array.from({length:5},(elem,index)=>{
    let number=index+0.5;
    // debugger;
    return(
      <span key={index}>
      {star>=index+1?(<i className='fa-solid fa-star'style={{color:"yellow"}}></i>):star>=number?(<i className="fa-solid fa-star-half"style={{color:"yellow"}}></i>):(<i className="fa-light fa-star-sharp"style={{color:"yellow"}}></i>)}
     </span>
    
    );
  });
    
  

   return (
    <>
    <div className='icon style'>
      {ratingstar}

      <p style={{fontFamily:theme.font,fontSize:theme.size}} className='text-lg'>{review}&nbsp;customer reviews:)</p>
    </div>
    </>
  );
   }
