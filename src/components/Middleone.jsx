
import React from 'react';
import "./Component.css";

export default function Middleone() {

    return (

        <>

            <section className='banner-area pt-44'>
                {/* <div style={{ position: 'relative', width: '100%', height: '100vh'}}>
                    <div className="w-60 h-1/2 float-right mr-4 bg-slate-200" style={{ position: 'absolute', top: '10px', right: '20px', zIndex: '1' }}></div>
                    <div className='w-60 h-1/2 float-right mr-4 ' style={{ position: 'absolute', top: '40px', right: '50px', zIndex: '2' }}>
                        <img src="https://i.pinimg.com/564x/85/83/a3/8583a3f411514d898fd08120fd3f31b5.jpg"></img>
                    </div>

                </div> */}
                <div className='grid grid-cols-2 gap-2'>
                <p className='text-white'>hey</p>
                    <div className='grid grid-cols-4 gap-4'>
                        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
                            <div className="w-60 h-1/2 float-right mr-4 bg-slate-200" style={{ position: 'absolute', top: '10px', right: '20px', zIndex: '1' }}>

                            </div>
                            <div className='w-60 h-1/2 float-right mr-4 ' style={{ position: 'absolute', top: '40px', right: '50px', zIndex: '2' }}>
                                <img src="https://i.pinimg.com/564x/85/83/a3/8583a3f411514d898fd08120fd3f31b5.jpg"></img>
                            </div>
                        </div>
                    
                    </div>
                    
                    </div>




            </section>




        </>



    )

}


