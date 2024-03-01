import { createContext, useReducer , useContext,useEffect} from "react";
import reducer from "../reducer/cartreducer";

const CartContext=createContext();
const getLocalCartData=()=>{
    let LocalCartData=localStorage.getItem("mycart");
    if(LocalCartData==[]){
        return [];
    }else{
        return JSON.parse(LocalCartData);
    }
};
const CartProvider=({children})=>{
    const initialState={
        // cart:[],
        cart:getLocalCartData(),
        total_item:"",
        total_amount:"",
        shipping_fee:50000,
    };
    const[state,dispatch]=useReducer(reducer,initialState);
    const addtoCart=(id,color,stock,amount,product)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,color,stock,amount,product}});
    }
    const Removefromcart=(id)=>{
        dispatch({type:"Removeitem",payload:{id}})
    }
    const clearcart=()=>{
        dispatch({type:"CLEAR_Cart"});
    }
    // to add the data to local storage  :allways string added
    //get vs set
    useEffect(()=>{
        localStorage.setItem("mycart",JSON.stringify(state.cart));
    },[state.cart]);
    return(
    <CartContext.Provider value={{...state,addtoCart,Removefromcart,clearcart}}>
        {children}
        </CartContext.Provider>
    );
};
const useCartContext=()=>{
    return useContext(CartContext);
}

export {CartProvider,useCartContext};
