import React, { useState, useEffect } from 'react';

export default function MyImage({ imgs = [{ url: "" }] }) {
  const [mainImage, setMainImage] = useState(imgs[0]);

  useEffect(() => {
    if (imgs.length > 0) {
      setMainImage(imgs[0]);
    }
  }, [imgs]);

  return (
    <div className='flex flex-col md:grid md:grid-cols-2 gap-2 justify-center items-center'>
      <div className="order-2 md:order-1 grid grid-cols-2 gap-2 md:grid-cols-none md:grid-rows-4 md:grid-flow-col">
        {imgs.map((curelm, index) => (
          <div className='h-32 w-full md:h-auto md:w-auto' key={index}>
            <img
              src={curelm.url}
              alt={curelm.filename}
              onClick={() => setMainImage(curelm)}
              className='h-20 w-full md:w-44 md:object-cover'
            />
          </div>
        ))}
      </div>
      <div className="order-1 md:order-2 mt-4 md:mt-0 w-full md:w-auto">
        <img src={mainImage.url} alt={mainImage.filename} className='w-full md:w-auto'/>
      </div>
    </div>
  );
}
