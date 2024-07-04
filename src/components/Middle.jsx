import React from 'react';
import { useTheme } from '../context/Themecontext';
import './Component.css';
import { NavLink } from 'react-router-dom';
import MiddleLottie from '../assets/MiddleLotte';

export default function Middle() {
    const { theme, updateTheme } = useTheme();
    return (
        <>
            <div className="bg-slate-100 w-full md:w-10/12 mx-auto md:ml-40 md:mr-16 rounded md:mt-44 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="md:ml-20">
                    <p className="font-bold text-2xl md:text-5xl float-left my-4 md:my-12 ml-4 md:ml-20 text-slate-800 pt-8 md:pt-16 mb-8 md:mb-16">
                        Lowest Prices <br />
                        Best Quality Shopping
                    </p>
                    <div className='grid grid-cols-3 divide-x divide-black divide-double w-full md:w-8/6 h-auto md:h-8 rounded'>
                        <p className='text-md md:text-xl font-normal divide-x'>
                            <img src="https://cdn-icons-png.flaticon.com/128/2203/2203124.png" className="float-left w-8" alt="icon" /> Fast Delivery
                        </p>
                        <p className='text-md md:text-xl font-normal divide-x'>
                            <img src="https://cdn-icons-png.flaticon.com/128/6491/6491511.png" className="float-left w-8" alt="icon" /> Cash on delivery
                        </p>
                        <p className='text-md md:text-xl font-normal divide-x'>
                            <img src="https://cdn-icons-png.flaticon.com/128/9561/9561956.png" className="float-left w-6" alt="icon" /> Easy return
                        </p>
                    </div>
                </div>
                <div className='hidden md:block'>
                   {/* <MiddleLottie/> */}
                </div>
            </div>

            <br /><br />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-28'>
                <div className='flex flex-col md:flex-row w-full h-full my-4 md:ml-40 md:mr-16 mb-16 md:space-x-12 justify-content-center rounded'>
                    <img src="https://i.pinimg.com/564x/bb/70/7d/bb707d71d83ac906b3199cfe8cba6487.jpg" className='mb-4 md:mr-4 h-96' alt="image" />
                    <div className='grid grid-cols-2 gap-2'>
                        <img src="https://i.pinimg.com/236x/06/4a/69/064a6941d4321e5e5def663a899db6e0.jpg" className='mr-4 h-44' alt="image" />
                        <img src="https://i.pinimg.com/236x/6f/7b/9f/6f7b9f1eb0a37910616f7b5255a5d924.jpg" className='mr-4 h-44 w-44' alt="image" />
                        <img src="https://i.pinimg.com/236x/b0/91/43/b09143aa663ffda77f1f15439ab86d02.jpg" className='mr-4 h-40' alt="image" />
                        <img src="https://i.pinimg.com/236x/c4/39/85/c439852c743d7d728974311d7b673b68.jpg" className='mr-4 h-40 w-44' alt="image" />
                    </div>
                </div>
                <p className='text-center md:text-right m-4 md:mx-24'>
                    <h1 className='text-bold text-4xl md:text-6xl'>WOMEN COLLECTION</h1>
                    <br /><br />
                    <NavLink to="/women">
                        <button className="button-86 md:float-right" role="button">Explore</button>
                    </NavLink>
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-28'>
                <p className='text-center md:text-left mx-4 md:mx-16 m-4 '>
                    <h1 className='text-bold text-4xl md:text-6xl'>MEN COLLECTION</h1>
                    <br /><br />
                    <NavLink to="/men">
                        <button className="button-86 md:float-left" role="button">Explore</button>
                    </NavLink>
                </p>
                <div className='flex flex-col md:flex-row w-full h-full my-4 md:ml- md:mb-16 md:space-x-12 rounded'>
                    <img src="https://i.pinimg.com/564x/2b/ce/4e/2bce4e436e70e459c7e38775c0e959e8.jpg" className='mb-4 md:mr-4 h-96' alt="image" />
                    <div className='grid grid-cols-2 gap-2'>
                        <img src="https://i.pinimg.com/236x/f9/d0/f9/f9d0f928c39bd0e8361c784e0bf86c9c.jpg" className='mr-4 h-44' alt="image" />
                        <img src="https://i.pinimg.com/236x/20/7e/c4/207ec4c11e5f88b6ff775a5bb1bcf9b2.jpg" className='mr-4 h-44 w-40' alt="image" />
                        <img src="https://i.pinimg.com/236x/0c/e8/29/0ce8299f7b1c845d575f949b244ea238.jpg" className='mr-4 h-40 w-28' alt="image" />
                        <img src="https://i.pinimg.com/474x/f7/33/8f/f7338fe9faddec6eabbdbafc80e02f9d.jpg" className='mr-4 h-40 w-40' alt="image" />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-28'>
                <div className='flex flex-col md:flex-row w-full h-full my-4 md:ml-40 md:mr-16 mb-16 md:space-x-12'>
                    <img src="https://i.pinimg.com/474x/01/4b/af/014baf2fff0ae489d3fa25bb57ab0953.jpg" className='mb-4 md:mr-4 h-96' alt="image" />
                    <div className='grid grid-cols-2 gap-2 '>
                        <img src='https://i.pinimg.com/236x/37/6a/12/376a12fd4f82f78b8f0dbe113163c39b.jpg' className='mr-4 w-44 h-44 ' alt="image" />
                        <img src="https://i.pinimg.com/474x/46/59/21/4659211453489d873c4350520322b506.jpg" className='mr-4 h-44 ' alt="image" />
                        <img src="https://i.pinimg.com/236x/e3/54/d5/e354d50239eada502c1e0a0be6e37ce4.jpg" className='mr-4 w-44 h-40' alt="image" />
                        <img src="https://i.pinimg.com/564x/38/8a/7e/388a7e2cd7e424bf71504484d9272b45.jpg" className='mr-4 w-28 h-40' alt="image" />
                    </div>
                </div>
                <p className='text-center md:text-right m-4 md:mx-24'>
                    <h1 className='text-bold text-4xl md:text-6xl'>BEAUTY</h1>
                    <br /><br />
                    <NavLink to="/beauty">
                        <button className="button-86 md:float-right" role="button">Explore</button>
                    </NavLink>
                </p>
            </div>
        </>
    );
}
