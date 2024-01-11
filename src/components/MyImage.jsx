import React, { useState } from 'react'
import { useEffect } from 'react';

export default function MyImage({ imgs=[{url:""}]}) {
    const[mainImage,setmainImage]=useState(imgs[0]);
   
    
    useEffect(() => {
        // Set the default image when the component mounts
        if (imgs.length > 0) {
          setmainImage(imgs[0]);
        }
      }, [imgs]);
    
    return (
        <div className='grid md:grid-cols-2 gap-2 justify-center items-center'>
        <div className='grid md:grid-rows-4 md:grid-cols-none md:grid-flow-col gap-4'>
            {imgs.map((curelm, index) => (
                <div className='h-32 w-52 md:h-auto md:w-auto' key={index}>
                    <img
                        src={curelm.url}
                        alt={curelm.filename}
                        onClick={() => setmainImage(curelm)}
                        className='h-20 w-44 object-cover'
                    />
                </div>
            ))}
        </div>
        <div className="mt-4 md:mt-0">
            <img src={mainImage.url} alt={mainImage.filename} />
        </div>
    </div>



    )
}


