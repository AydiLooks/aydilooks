import { createContext, useContext, useEffect, useReducer} from "react";
import reducer from "../reducer/productReducer";
import axios from "axios";

const AppContext= createContext();
const API="https://api.pujakaitem.com/api/products";
const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{},


};
const AppProvider=({children})=>{
    const[state,dispatch]= useReducer(reducer,initialState);
    const getProducts = async (API)=>{
        dispatch({type:"SET loading"});
        try{
        const res=await axios.get(API);
        const products=await res.data;
        dispatch({type:"SET_API_DATA",payload:products});
        }catch(error){
            dispatch({type:"API_Error"})
        }
    };
    // my 2nd api call for single product
    const getsingleproduct=async(url)=>{
        dispatch({type:"SET_single_loading"});
        try{
            const res=await axios.get(url);
            const singleProduct=await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct});

             
        }catch(error){
            dispatch({type:"Single_Error"})
        }
    }


    useEffect(()=>{
        getProducts(API);
    },[]);


    return(
    <AppContext.Provider value={{...state,getsingleproduct}}>{children}</AppContext.Provider>
    );
}
//custom hooks
const useProductContext =()=>{
    return useContext(AppContext);
};
export{AppProvider,AppContext,useProductContext}; 