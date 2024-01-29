import React, { useState } from 'react'
import './Component.css';
import { useFilterContext } from '../context/filtercontext';

export default function Sort() {
  const{grid_view,setGridView,setListView,filter_products,sorting}=useFilterContext();
  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setListView();
    } else {
      setGridView();
    }
  };

  

  
  return (
    <div className='mb-16 mt-4 border-2 p-4'>
      <div className='grid grid-cols-3 gap-3'>
          <div className='toogle'>
          <input id="checkbox" type="checkbox" onChange={handleCheckboxChange}/>
    <label class="toggle" for="checkbox">
        <div id="bar1" class="bars"></div>
        <div id="bar2" class="bars"></div>
        <div id="bar3" class="bars"></div>
    </label>
          </div>
          <div className='product-data'>
            <p>{`${filter_products.length} Products Available`}</p>
          </div>
          <div className='filter'>
            <form action='#'>
              <label htmlFor='sort'></label>
              <select name="sort" id='sort' className='border-2' onClick={sorting} >
              <option value='lowest'>Price(lowest)</option>
              <option value='#'disabled></option>
              <option value='highest'>Price(highest)</option>
              <option value='#'disabled></option>
              <option value='a-z'>Price(a-z)</option>
              <option value='#'disabled></option>
              <option value='z-a'>Price(z-a)</option>
              </select>
            </form>
          </div>
      </div>
    </div>
  )
}
