

export default function cartReducer(state,action) {
    if(action.type==="ADD_TO_CART"){
        let{id,color,amount,stock,product}=action.payload;
        // checking the existing element
        let existingProduct=state.cart.find(
            (curItem)=>curItem.id===id+color
        );
        if(existingProduct){
            let updateProduct=state.cart.map((curElem)=>{
                if(curElem.id==id+color){
                    let newAmount=curElem.amount+amount;
                    if(newAmount >=curElem.max){
                        newAmount=curElem.max;
                    }
                
                return {
                    ...curElem,
                    amount:newAmount
                }
            }
            else{
                return curElem;
            }
            });
            return{
                ...state,
                cart:updateProduct,
            };
        }
        else{
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
    if(action.type==="setDecrease"){
        let updatesProduct=state.cart.map((curElem)=>{
            if(curElem.id==action.payload){
                console.log(curElem);
                let newAmount=curElem.amount-1;
                if(newAmount <1){
                    newAmount=1;
                }
            
            return {
                ...curElem,
                amount:newAmount
            }
        }
        else{
            return curElem;
        }
        });
        return{
            ...state,
            cart:updatesProduct,
        };
    }
    if(action.type==="setIncrease"){
        let updatedProduct=state.cart.map((curElem)=>{
            if(curElem.id==action.payload){
                console.log(curElem);
                let newAmount=curElem.amount+1;
                if(newAmount >=curElem.max){
                    newAmount=curElem.max;
                }
            
            return {
                ...curElem,
                amount:newAmount
            }
        }
        else{
            return curElem;
        }
        });
        return{
            ...state,
            cart:updatedProduct,
        };
    }
    if(action.type==="CART_TOTAL_ITEM"){
        let updatedItemVal=state.cart.reduce((initialVal,curElem)=>{
         let {amount}=curElem;
         initialVal=initialVal+amount;
         return initialVal;
        },0);
        return {
            ...state,
            total_item:updatedItemVal,
        }
    }
  return state;
}
