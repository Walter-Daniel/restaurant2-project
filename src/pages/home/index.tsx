import { useEffect, useState } from "react";
import { products } from '../../api/products';
import { Product } from "./products.interfaces";
import { Grid } from "@mui/material";
import { CardComponent } from "../../components";
import { CardGrid } from "../../components/CardSkeleton";



export const HomePage = () => {

  const [cardProducts, setCardProducts ] = useState<Product[] | null>(null)

  useEffect(() => {
    products.getAll().then((r) => {
      setCardProducts(r.data.allProducts);
    }).catch((e) =>{
      console.log(e)
    });
  },[])
  
  return (

    <div style={{ marginTop: '4rem' }}>
      {
        cardProducts !== null? (
          <Grid container spacing={2} direction="row">
            {
              cardProducts!.map((item) =>(
                <Grid item xs={3}>
                  <CardComponent name={item.name} price={item.price} detail={item.detail} key={item._id}/>
                </Grid>
              ))  
            }
          </Grid>
        ): <CardGrid />
      }
    </div>

  )
}
