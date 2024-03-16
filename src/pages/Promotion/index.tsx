import { FC } from 'react';
import { CardPromotionComponent, ErrorComponent, LoadingComponent } from '../../components';
import { Box, Container, Grid } from '@mui/material';
import { usePromotions } from '../../hooks/usePromotion';

export const PromoPage: FC = () => {

    const { isLoading, data, isError,  } = usePromotions({
        pageSize:4
    });

  return (
    <Container>
      <Box sx={{ minHeight: '40vh', marginTop:'3rem' }} key='promotion'>
          {isLoading ? <LoadingComponent /> 
                  :(
                    <Grid container spacing={2} direction="row" height='100%'>
                      {
                          data?.promoProducts.map((product)=>(
                              <Grid item xs={12} sm={6} md={3}  key={product._id} sx={{ width: '100%', display:'flex', justifyContent:'center'}}>
                                  <CardPromotionComponent name={product.name} price={product.price} detail={product.detail} id={product._id} key={product._id}/>
                              </Grid>
                          ))
                      }
                  </Grid>
                  )
          }
          {isError && <ErrorComponent />}
      </Box>
    </Container>
  )
}
