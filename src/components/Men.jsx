import React from 'react'
import FilterSection from './FilterSection';
import Sort from './Sort';
import ProductList from './ProductList';
import { useFilterContext } from '../context/filtercontext';

export default function() {
  const{ filter_products}=useFilterContext();
  console.log(filter_products);
  return (
    <div className='grid grid-cols-2 gap-2'>
      <div>
        <FilterSection/>
      </div>
      <section className='product-view-sort'>
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
