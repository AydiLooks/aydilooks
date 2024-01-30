import React from 'react'
import { useFilterContext } from '../context/filtercontext'

export default function FilterSection() {
  const{filters:{text,category},
  updateFilterValue,
  all_products,
      }=useFilterContext();


  //  to get the unique data on each fields
  const getUniqueData=(data,property)=>{
         let newVal=data.map((curelm)=>{
          return curelm[property];
         });
         return(newVal=["All", ...new Set(newVal)]);
         
  }
  //we need unique data
  const categoryOnlyData=getUniqueData(all_products,"category");

  return (
    <div className='grid grid-rows-5 border-2 pl-44 mt-4 gap-5'>
      <div className='mt-14'>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type='text'name='text' value={text} onChange={updateFilterValue} placeholder='search' className='border-2'/>
        </form>
      </div>
      <div className=''>
      <h3 className='font-bold text-xl'>Category</h3>
      { 
        categoryOnlyData.map((curelm,index)=>{
          return <button key={index} className='m-4 grid grid-row-4'
          type='button'
          name="category" 
          value={curelm}
          onClick={updateFilterValue}>
            {curelm}
          </button>
          
        })
      } 
</div>
<div></div><div></div><div></div>
    </div>
  )
}
