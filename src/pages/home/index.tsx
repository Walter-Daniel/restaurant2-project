import { CardComponent } from "../../components";
import { useProducts } from "../../hooks/useProducts";
import { CardGrid } from "../../components/CardSkeleton";
import HeroComponent from "../../components/hero";
import { ErrorComponent } from "../../components/ErrorComponent";

import {Container, Grid, Typography } from "@mui/material";


export const HomePage = () => {

  const productsQuery = useProducts();
  
  return (

    <>
      <HeroComponent />
      <Container style={{ marginTop: '4rem' }}>
              <Grid container spacing={2} direction="row" key="hola">
                {(productsQuery.isLoading) 
                        ? <CardGrid /> 
                        :((productsQuery.isError) 
                          ? <ErrorComponent />
                          : productsQuery.data?.map((item) =>(
                              <Grid item xs={12} sm={6} md={4}  key={item._id}>
                                <Typography variant='h2'>{item.name}</Typography>
                                <CardComponent name={item.name} price={item.price} detail={item.detail} id={item._id}/>
                              </Grid>
                            ))  
                          )
                }
              </Grid>
        </Container>
    </>

  )
}
