// import { useEffect, useState } from "react";

import { CardComponent } from "../../components";
import { CardGrid } from "../../components/CardSkeleton";
import HeroComponent from "../../components/hero";

import { Grid } from "@mui/material";
import { useProducts } from "../../hooks/useProducts";


export const HomePage = () => {

  const productsQuery = useProducts();

  if(productsQuery.isLoading){
    return (<CardGrid />)
  }
  
  return (

    <>

    <HeroComponent />
    
      <div style={{ marginTop: '4rem' }}>
          
            
              <Grid container spacing={2} direction="row" key="hola">
                {
                  productsQuery.data?.map((item) =>(
                    <Grid item xs={3} key={item._id}>
                      <CardComponent name={item.name} price={item.price} detail={item.detail} id={item._id}/>
                    </Grid>
                  ))  
                }
              </Grid>
            
          
        </div>
    </>

  )
}
