import React from 'react'
import { useFilterContext } from '../context/filtercontext'

export default function FilterSection() {
  const { filters: { text, category },
    updateFilterValue,
    all_products,
  } = useFilterContext();


  //  to get the unique data on each fields
  const getUniqueData = (data, property) => {
    let newVal = data.map((curelm) => {
      return curelm[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);

  }
  //we need unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");

  return (
    <div className='grid grid-rows-5 border-2 pl-44 mt-4 gap-6'>
      <div className='mt-8'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type='text' name='text' value={text} onChange={updateFilterValue} placeholder='search' className='border-2' />
        </form>
      </div>
      <div className='row-span-2 m-4'>
        <h3 className='font-bold text-xl'>Category</h3>
        {
          categoryOnlyData.map((curelm, index) => {
            return <button key={index} className=' grid grid-row-4'
              type='button'
              name="category"
              value={curelm}
              onClick={updateFilterValue}>
              {curelm}
            </button>

          })
        }
      </div>
      <div className='m-4'>
        <h1 className='font-bold text-xl'>Company</h1>
        <form action='#'>
        <select className='border-2 'id='company' name="company" onClick={updateFilterValue} >
        { companyOnlyData.map((curelm,index)=>{
          return <option key={index} name="company" value={curelm} >{curelm}</option>
        })

        }
        </select>
        </form>
      </div>
    </div>
  )
}
