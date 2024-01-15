import React, { useState } from 'react'
import './Component.css';
import { useFilterContext } from '../context/filtercontext';

export default function Sort() {
  const{grid_view,setGridView,setListView}=useFilterContext();
  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setGridView();
    } else {
        setListView();
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
          <div className='amoutn'>amount</div>
          <div className='filter'>filter</div>
      </div>
    </div>
  )
}
