import React, { useState } from 'react'

export default function MyImage({imgs=[{url:""}]}) {
    const[mainImage,setmainImage]=useState(imgs[0])
  return (
    <>
    <div className='grid grid-col-2'>
        {
            imgs.map((curelm,index)=>{
                return(
                    <figure>
                        <img src={curelm.url}alt={curelm.filename}
                        key={index} 
                        onClick={()=>setmainImage(curelm)}
                        />
                    </figure>
                )
            })
        }
    </div>
    <div className=''>
        <img src={mainImage.url} alt={mainImage.filename}/>
    </div>
    </>
  )
}
