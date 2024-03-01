

export default function cartReducer(state,action) {
    if(action.type==="ADD_TO_CART"){
        let{id,color,amount,stock,product}=action.payload;
        let cartProduct;
        cartProduct={
            id:id+color,
            name:product.name,
            color,
            stock,
            amount,
            image:product.image[0].url,
            price:product.price,
            max:product.stock
        }
        return{
            ...state,
            cart:[...state.cart,cartProduct],

        };

    }
    if(action.type==="Removeitem"){
        let {id}=action.payload;
        let updatecart=state.cart.filter((item)=> item.id!==id);
        return{
            ...state,   
            cart:updatecart,
        };
        
    }
    if(action.type==="CLEAR_Cart"){
        return{
            ...state,
            cart:[],
        };
    }
  return state;
}
