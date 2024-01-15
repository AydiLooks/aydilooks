import React from 'react'
import myimage from '../assets/39ebac85e4e5bdb06af7eafe1066a524-removebg-preview.png'

export default function Middleone () {
  return (
    <div className='banner-area grid grid-cols-2'>
        <div class="ball" style={{top: "50vh", left: "50vw"}}></div>
          <div class="ball" style={{top: "50vh", left: "50vw"}}></div>
          <div class="ball" style={{top: "30vh", left: "70vw"}}></div>
          <div class="ball" style={{top: "70vh", left: "20vw"}}></div>



        <div className='text mt-56'style={{paddingLeft:"10%"}}>
          <h1 className='font-bold text-5xl'>Elegance is not standing out, but being remembered.</h1><br></br>
          <p>Get into the world of fashion and style.</p>
          <h1 className='font-bold'>Elevate Your style,simplify your shopping.</h1>
          <p>Fashion at your doorstep at just one click.</p>
          
        </div>
        <div className='img pt-32'style={{float:"right"}}>
            <img src={myimage}></img>
            
        </div>
        
    </div>

  )
}
