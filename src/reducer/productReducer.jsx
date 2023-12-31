
const ProductReducer=(state,action)=>{
   switch(action.type){
    case "SETloading":
    return{
    ...state,
    isloading:true,
    };
    case "API_Error":
        return{
            ...state,
            isLoading:false,
            isError:true,
        };
    case "SET_API_DATA":
            const featuredata =action.payload.filter((currele)=>{
                 return currele.featured===true; 
            });
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featureProducts:featuredata,
            
                
            }
    case "SET_single_loading":
        return{
            ...state,
            isSingleLoading:true,
        };
    case "SET_SINGLE_PRODUCT":
        return{
            ...state,
            isSingleLoading:false,
            singleProduct:action.payload,

        } 
    case "Single_Error":
        return{
            ...state,
            isSingleLoading:false,
            isError:true,
        }             
          
    default:
        return state;
   }
}    

export default ProductReducer;