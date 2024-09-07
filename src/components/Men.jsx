import React from 'react'
import FilterSection from './FilterSection';
import Sort from './Sort';
import ProductList from './ProductList';
import { useFilterContext } from '../context/filtercontext';
import { useTheme } from '../context/Themecontext';

export default function() {
  const{ filter_products}=useFilterContext();
  const{theme,setTheme}=useTheme();
  // console.log(filter_products);
  return (
    <div className='grid grid-cols-4 gap-4 mt-12 'style={{backgroundColor:theme.bgcolor}}>
      <div>
        <FilterSection/>
      </div>
      <section className='col-span-3'>
        <div className='sort-filter'>
          <Sort/>
        </div>
        <div className='main-product'>
          <ProductList/>
        </div>
      </section>
    </div>
  )
}