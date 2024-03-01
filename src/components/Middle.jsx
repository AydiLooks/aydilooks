import React from 'react';
import { useTheme } from '../context/Themecontext';
import'./Component.css';
import { NavLink } from 'react-router-dom';
// import img from '../assets/80d45e10fbb13155d68ad9c8a823d79c-removebg-preview.png'




export default function Middle() {
    const { theme, updateTheme } = useTheme();
    return (
        <>
            {/* <div className="bg-slate-100 w-10/12 h-96 my-12 ml-40 mr-16 rounded mt-44 grid grid-cols-2 gap-2">
                <div>
                <p className="font-bold text-5xl float-left my-12 ml-20 text-slate-800 pt-16 mb-16">Lowest Prices */}
                <div className="bg-slate-100 w-full md:w-10/12 h-auto md:h-96 my-12 mx-auto md:ml-40 md:mr-16 rounded md:mt-44 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="md:ml-20">
          <p className="font-bold text-2xl md:text-5xl float-left my-4 md:my-12 ml-4 md:ml-20 text-slate-800 pt-8 md:pt-16 mb-8 md:mb-16">Lowest Prices
                    <br></br>
                    Best Quality Shopping<br></br><br></br>
                    {/* <div className='grid grid-cols-3 divide-x divide-black divide-double w-8/6 h-8 rounded'>
                        <p className='text-xl font-normal divide-x'><img src="https://cdn-icons-png.flaticon.com/128/2203/2203124.png" className="float-left w-8"></img>Fast Delivery</p>
                        <p className='text-xl font-normal divide-x'> <img src="https://cdn-icons-png.flaticon.com/128/6491/6491511.png" className="float-left w-8"></img>Cash on delivery</p>
                        <p className='text-xl font-normal divide-x'><img src="https://cdn-icons-png.flaticon.com/128/9561/9561956.png" className="float-left w-6"></img>Easy return</p>
                    </div> */}
                     <div className='grid grid-cols-3 divide-x divide-black divide-double w-full md:w-8/6 h-auto md:h-8 rounded'>
              <p className='text-md md:text-xl font-normal divide-x'><img src="https://cdn-icons-png.flaticon.com/128/2203/2203124.png" className="float-left w-8" alt="icon"></img>Fast Delivery</p>
              <p className='text-md md:text-xl font-normal divide-x'> <img src="https://cdn-icons-png.flaticon.com/128/6491/6491511.png" className="float-left w-8" alt="icon"></img>Cash on delivery</p>
              <p className='text-md md:text-xl font-normal divide-x'><img src="https://cdn-icons-png.flaticon.com/128/9561/9561956.png" className="float-left w-6" alt="icon"></img>Easy return</p>
            </div>
                </p>
                </div> 
                <span className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <img src="https://i.pinimg.com/564x/c5/f3/10/c5f3102bcb2324a8662af9183914b699.jpg" className="w-full h-auto md:h-3/4" alt="no image" />
                {/* <span className='grid grid-cols-2 gap-2'>
                
                <img src="https://i.pinimg.com/564x/c5/f3/10/c5f3102bcb2324a8662af9183914b699.jpg" className=" h-3/4" alt="no image"/>  */}
                {/* <img src="https://i.pinimg.com/564x/2c/09/a3/2c09a3585eb27f1a44d0b519212b20d4.jpg" className="" alt="no image"/> */}
                </span>
            </div> 
            
            
            
            
            
            <br></br><br></br>
            {/* <div className="flex items-center justify-center mb-12">
                <hr className='w-1/4 border-1 border-solid border-black ml-16'></hr>
                <p className="mx-4 font-semibold text-3xl "style={{fontFamily:theme.font,}}>Top Categories To choose From</p>
                <hr className='w-1/4 border-1 border-solid border-black'></hr>
            </div> */}
            <br></br><br></br>
            <div className='grid grid-cols-2 gap-2 mb-28'>
            <div className='flex flex-row w-full h-full  my-4 ml-40 mr-16 mb-16 space-x-12 justify-content-center rounded '>
                
                <img src="https://i.pinimg.com/564x/bb/70/7d/bb707d71d83ac906b3199cfe8cba6487.jpg" className='mr-4 h-96'></img>
                <div className='grid grid-cols-2 gap-2'>
                <img src="https://i.pinimg.com/236x/06/4a/69/064a6941d4321e5e5def663a899db6e0.jpg" className='mr-4 h-44 '></img>
                <img src="https://i.pinimg.com/236x/6f/7b/9f/6f7b9f1eb0a37910616f7b5255a5d924.jpg" className='mr-4 h-44 w-44'></img>
                <img src="https://i.pinimg.com/236x/b0/91/43/b09143aa663ffda77f1f15439ab86d02.jpg" className='mr-4 h-40 '></img>
                <img src="https://i.pinimg.com/236x/c4/39/85/c439852c743d7d728974311d7b673b68.jpg" className='mr-4 h-40 w-44'></img>
                
                </div>

            </div>
            <p className='float:right m-44 mx-96'>
            <h1 className='text-bold text-6xl'>WOMEN COLLECTION</h1>
                <br></br><br></br><NavLink to="/women">
            <button class="button-86" role="button">Explore</button></NavLink></p>
            </div>
            <div className='grid grid-cols-2 gap-2 mb-28'>
            <p className='float:right mx-16 m-44 '>
            <h1 className='text-bold text-6xl'>MEN COLLECTION</h1>
                <br></br><br></br>
                <NavLink to="/men">
              <button class="button-86" role="button" >Explore</button></NavLink>

            </p>
            <div className='flex flex-row  w-full h-full  my-4 ml- mr- mb-16 space-x-12 rounded'>
                <img src="https://i.pinimg.com/564x/2b/ce/4e/2bce4e436e70e459c7e38775c0e959e8.jpg" className='mr-4 h-96'></img>
                <div className='grid grid-cols-2 gap-2'>
                <img src="https://i.pinimg.com/236x/f9/d0/f9/f9d0f928c39bd0e8361c784e0bf86c9c.jpg" className='mr-4 h-44'></img>
                <img src="https://i.pinimg.com/236x/20/7e/c4/207ec4c11e5f88b6ff775a5bb1bcf9b2.jpg" className='mr-4 h-44 w-40'></img>
                <img src="https://i.pinimg.com/236x/0c/e8/29/0ce8299f7b1c845d575f949b244ea238.jpg" className='mr-4 h-40 w-28 '></img>
                <img src="https://i.pinimg.com/474x/f7/33/8f/f7338fe9faddec6eabbdbafc80e02f9d.jpg" className='mr-4 h-40 w-40'></img>
                
                </div>
               
            </div>
           
            </div>
            <div className='grid grid-cols-2 gap-2 mb-28'>
            <div className='flex flex-row  w-full h-full  my-4 ml-40 mr-16 mb-16 space-x-12'>
                <img src="https://i.pinimg.com/474x/01/4b/af/014baf2fff0ae489d3fa25bb57ab0953.jpg"className='mr-4 h-96'></img>
                <div className='grid grid-cols-2 gap-2 '>
                <img src='https://i.pinimg.com/236x/37/6a/12/376a12fd4f82f78b8f0dbe113163c39b.jpg' className='mr-4 w-44 h-44 '></img>
                <img src="https://i.pinimg.com/474x/46/59/21/4659211453489d873c4350520322b506.jpg"className='mr-4 h-44 '></img>
                <img src="https://i.pinimg.com/236x/e3/54/d5/e354d50239eada502c1e0a0be6e37ce4.jpg" className='mr-4 w-44 h-40'></img>
                <img src="https://i.pinimg.com/564x/38/8a/7e/388a7e2cd7e424bf71504484d9272b45.jpg" className='mr-4 w-28 h-40'></img>
                </div>
            </div>
            <p className='float:right m-40 mx-96'>
                <h1 className='text-bold text-6xl'>BEAUTY</h1>
                <br></br><br></br>
            <NavLink to="/beauty">   
            <button class="button-86" role="button">Explore</button></NavLink> </p>
        
            </div>



        </>

    )
}
