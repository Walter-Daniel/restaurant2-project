
import { useProducts } from "../../hooks/useProducts";
import { CardGrid } from "../../components/CardSkeleton";
import HeroComponent from "../../components/hero";
import { ErrorComponent } from "../../components/ErrorComponent";

import {Container, Grid, Typography } from "@mui/material";
import { Product } from "../../interfaces/product";
import { useEffect, useState } from "react";
import { CardComponent } from "../../components";
import { Box } from "@mui/system";


export const HomePage = () => {
  
  const [productsByCategory, setProductsByCategory] = useState<{ [key: string]: Product[] }>({});

  const productsQuery = useProducts();

  useEffect(() => {
    const groupedProducts: { [key: string]: Product[] } = {};
    productsQuery.data?.forEach((product) => {
      const categoryId = product.category.name;
      if (!groupedProducts[categoryId]) {
        groupedProducts[categoryId] = [];
      }
      groupedProducts[categoryId].push(product);
    });
    console.log(groupedProducts)
    setProductsByCategory(groupedProducts);
  }, [productsQuery.data]);

  return (

    <div>
      <HeroComponent />
      <Container style={{ marginTop: '4rem' }}>
            
                {(productsQuery.isLoading) 
                        ? <CardGrid /> 
                        :((productsQuery.isError) 
                          ? <ErrorComponent />
                          : Object.entries(productsByCategory).map(([categoryId, products]) =>(
                           <div key={categoryId}>
                           
                            <Box padding='1rem' >
                              <Typography  sx={{ fontSize:{xs:'2.5rem', md:'3rem'} }}>{categoryId}</Typography>
                            </Box>
                            
                            <Grid container spacing={2} direction="row" key={categoryId}>

                              {
                                products.map((product)=>(
                                  <Grid item xs={12} sm={6} md={4}  key={product._id} sx={{ width: '100%', display:'flex', justifyContent:'center' }}>
                                      <CardComponent name={product.name} price={product.price} detail={product.detail} id={product._id} key={product._id}/>
                                  </Grid>
                                ))
                              }

                              </Grid>
                           
                           </div>
                            ))  
                          )
                }
     
        </Container>
    </div>

  )
}
