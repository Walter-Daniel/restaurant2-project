import { useEffect } from "react";
import { products } from "../../api/products";
import { useAppSelector } from "../../redux/hooks";



export const HomePage = () => {

  useEffect(() => {
    products.getAll().then((r) => {
      console.log(r.data.allProducts)
    }).catch((e) =>{
      console.log(e)
    });
  },[])
  
  console.log(products)
  const {isAuth} = useAppSelector((state) => state.authReducer);
  return (

    <div style={{ marginTop: '4rem' }}>
      {
        isAuth  ? 
                <h1>HOLAAAAAAAAAAAAAAAAAAAAA</h1>
                :
                <h1>False</h1>
      }
    </div>

  )
}
