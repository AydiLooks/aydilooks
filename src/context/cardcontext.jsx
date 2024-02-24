import { createContext, useReducer , useContext} from "react";
import reducer from "../reducer/cartreducer";

const CartContext=createContext();
const CartProvider=({children})=>{
    const initialState={
        cart:[],
        total_item:"",
        total_amount:"",
        shipping_fee:50000,
    };
    const[state,dispatch]=useReducer(reducer,initialState);
    const addtoCart=(id,color,amount,product)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}});
    }
    return(
    <CartContext.Provider value={{...state,addtoCart}}>
        {children}
        </CartContext.Provider>
    );
};
const useCartContext=()=>{
    return useContext(CartContext);
}

export {CartProvider,useCartContext};
