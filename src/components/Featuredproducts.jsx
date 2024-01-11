import { useProductContext } from "../context/productcontext"
import Product from "./Product";

export default function Featuredproducts() {
  const{isLoading,featureProducts}=useProductContext();
  console.log(featureProducts);
  if(isLoading){
    return <div>loading...</div>;
  }
  else{
  return (
    <div className="section">
      {/* <div className="text-xl font-semibold">Check Now</div><br></br> */}
      <div className="font-serif text-2xl font-semibold">Top Categories For You:-</div><br></br>
      <div className="grid grid-cols-3 space-x-4 mr-1 ml-6">
        {
          featureProducts.map((item) => {
              return <Product key={item.id}{...item}/>
          })
        }
      </div>
    </div>
    
  )
  }
}
