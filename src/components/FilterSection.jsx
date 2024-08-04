// import React from 'react'
// import { useFilterContext } from '../context/filtercontext'

// export default function FilterSection() {
//   const { filters: { text, category },
//     updateFilterValue,
//     all_products,
//   } = useFilterContext();


//   //  to get the unique data on each fields
//   const getUniqueData = (data, property) => {
//     let newVal = data.map((curelm) => {
//       return curelm[property];
//     });
//     return (newVal = ["All", ...new Set(newVal)]);

//   }
//   //we need unique data
//   const categoryOnlyData = getUniqueData(all_products, "category");
//   const companyOnlyData = getUniqueData(all_products, "company");

//   return (
//     <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 mt-4 '>
//     <div className='border-2 p-4 md:col-span-1 lg:pl-4 h-full overflow-automd:flex md:flex-col md:min-h-screen md:w-64 md:bg-gray-200 md:shadow-md md:fixed md:top-0 md:left-0 md:overflow-y-auto md:transition-all mt-16'>
//         <form onSubmit={(e) => e.preventDefault()}>
//             <input type='text' name='text' value={text} onChange={updateFilterValue} placeholder='Search' className='border-2 w-full md:w-auto px-4 py-2 rounded-lg' />
//         </form>
//         <div className='mt-4 overflow-auto'>
//             <h3 className='font-bold text-xl'>Category</h3>
//             {categoryOnlyData.map((curelm, index) => (
//                 <button key={index} className='mt-2 w-full md:w-auto py-2 px-4 rounded-lg border-2 overflow-hidden' type='button' name="category" value={curelm} onClick={updateFilterValue}>
//                     {curelm}
//                 </button>
//             ))}
//         </div>
//         <div className='mt-4'>
//             <h3 className='font-bold text-xl'>Company</h3>
//             <form action='#'>
//                 <select className='border-2 w-full md:w-auto px-4 py-2 rounded-lg' id='company' name="company" onClick={updateFilterValue}>
//                     {companyOnlyData.map((curelm, index) => (
//                         <option key={index} name="company" value={curelm}>{curelm}</option>
//                     ))}
//                 </select>
//             </form>
//         </div>
//     </div>
// </div>

//   )
// }

import React, { useState } from 'react';
import { useFilterContext } from '../context/filtercontext';

export default function FilterSection() {
  const { filters: { text, category }, updateFilterValue, all_products } = useFilterContext();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to get unique data for filters
  const getUniqueData = (data, property) => {
    let newVal = data.map((curelm) => {
      return curelm[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  // Getting unique categories and companies
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='relative'>
      {/* Sidebar for small screens */}
      <div className={`fixed top-0 left-0 h-full bg-gray-200 border-r-2 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-1/4 w-64 p-4 overflow-y-auto z-50`}>
        <button className='absolute top-2 right-2 p-2' onClick={handleSidebarToggle}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            name='text'
            value={text}
            onChange={updateFilterValue}
            placeholder='Search'
            className='border-2 w-full px-4 py-2 rounded-lg mb-4'
          />
        </form>
        <div>
          <h3 className='font-bold text-xl mb-2'>Category</h3>
          {categoryOnlyData.map((curelm, index) => (
            <button
              key={index}
              className='mt-2 w-full py-2 px-4 rounded-lg border-2 text-left'
              type='button'
              name="category"
              value={curelm}
              onClick={updateFilterValue}
            >
              {curelm}
            </button>
          ))}
        </div>
        <div className='mt-4'>
          <h3 className='font-bold text-xl mb-2'>Company</h3>
          <form action='#'>
            <select
              className='border-2 w-full px-4 py-2 rounded-lg'
              id='company'
              name="company"
              onChange={updateFilterValue}
            >
              {companyOnlyData.map((curelm, index) => (
                <option key={index} name="company" value={curelm}>{curelm}</option>
              ))}
            </select>
          </form>
        </div>
      </div>

      {/* Main content */}
      <div className={`lg:w-3/4 ml-auto p-4 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        <button className='lg:hidden p-2 mb-4' onClick={handleSidebarToggle}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        {/* Main content goes here */}
      </div>
    </div>
  );
}
