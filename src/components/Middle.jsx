import React from 'react'

export default function Middle() {
    return (
        <>
            <div className="bg-slate-100 w-10/12 h-96 my-4 ml-40 mr-16 rounded ">
                <p className="font-bold text-5xl float-left my-12 ml-20 text-slate-800 pt-16 mb-16">Lowest Prices
                    <br></br>
                    Best Quality Shopping<br></br><br></br>
                    <div className='grid grid-cols-3 divide-x divide-black divide-double w-8/6 h-8 rounded'>
                        <p className='text-xl font-normal divide-x'><img src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg" className="float-left"></img>fast delivery</p>
                        <p className='text-xl font-normal divide-x'> <img src="https://images.meesho.com/images/pow/cod_jamun.svg" className="float-left"></img>Cash on delivery</p>
                        <p className='text-xl font-normal divide-x'><img src="https://images.meesho.com/images/pow/easyReturns_jamun.svg" className="float-left"></img>Easy return</p>
                    </div>
                </p>
                <img src="https://images.meesho.com/images/marketing/1678691617864_512.webp" className="w-300 h-300 float-right mr-20 pt-4 " alt="no image"></img>

            </div><br></br><br></br>
            <div className="flex items-center justify-center">
                <hr className='w-1/4 border-1 border-solid border-black ml-16'></hr>
                <p className="mx-4 font-semibold text-3xl">Top Categories To choose From</p>
                <hr className='w-1/4 border-1 border-solid border-black'></hr>
            </div>

            <br></br><br></br>
            <div className='flex flex-row bg-pink-100 w-10/12 h-full  my-4 ml-40 mr-16 mb-16 space-x-12'>
                <img src="https://images.meesho.com/images/marketing/1678691686252_400.webp" className='mr-4'></img>
                <img src='https://images.meesho.com/images/marketing/1678691699680_300.webp' className='h-68 mt-44'></img>
                <img src='https://images.meesho.com/images/marketing/1678691712594_300.webp' className='h-68 mt-44 '></img>

            </div>

        </>

    )
}
