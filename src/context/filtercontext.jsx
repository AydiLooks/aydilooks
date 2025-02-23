import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";
const FilterContext=createContext();
const initialState={
   filter_products:[],
   all_products:[],
   grid_view:true,
   sorting_value:"lowest",
   filters:{
   text:"",
   category:"All",
   company:"All",
   },
}

export const FilterContextProvider=({children})=>{
   const{products}=useProductContext();
   const[state,dispatch]=useReducer(reducer,initialState);
   // to set the grid view
   const setGridView=()=>{
      return dispatch({type:"SET_GRIDVIEW"});
   };
   const setListView=()=>{
      return dispatch({type:"SET_ListVIEW"});
   };
   // sorting
   const sorting =(event)=>{
      let userValue=event.target.value;
         dispatch({type:"GET_SORT_VALUE",payload:userValue});
   }
   // function for modifying the product a/c to category

// update the filter values
const updateFilterValue=(event)=>{
let name=event.target.name;
let value=event.target.value;
   return dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}})
};

   // to sort the product
   useEffect(()=>{
      dispatch({type:"FILTER_PRODUCTS"});
      dispatch({type:"SORTING_PRODUCTS"});
   },[products,state.sorting_value,state.filters]);


   useEffect(()=>{
      dispatch({type:'LOAD_FILTER_PRODUCTS',payload:products});

   },[products]);
     return (
     <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue}}>
      {children}
     </FilterContext.Provider>
     );
 }

 export const useFilterContext=()=>{
    return useContext(FilterContext)
 }