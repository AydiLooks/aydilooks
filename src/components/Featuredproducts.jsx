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
    <div className="section" id="featured">
      {/* <div className="text-xl font-semibold">Check Now</div><br></br> */}
      <div className="font-serif text-2xl font-semibold ml-14">Top Categories For You:-</div><br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 mr-1 ml-6 ">
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
