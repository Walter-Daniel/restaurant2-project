import { FC } from 'react';
import { useProducts } from '../../hooks';
import { CardComponent, ErrorComponent, LoadingComponent } from '../../components';
import { Box, Grid, Typography } from '@mui/material';

export const PromoPage: FC = () => {

    const { isLoading, data, isError } = useProducts({});

  return (
    <>
       {isLoading && <LoadingComponent />}
       {isError && <ErrorComponent />}
       
       <>
        <Box padding='1rem' >
            <Typography  sx={{ fontSize:{xs:'2.5rem', md:'3rem'} }}>Promoción</Typography>
        </Box>
        <Grid container spacing={2} direction="row">
            {
                data.promoProducts.map((product)=>(
                    <Grid item xs={12} sm={6} md={4}  key={product._id} sx={{ width: '100%', display:'flex', justifyContent:'center' }}>
                        <CardComponent name={product.name} price={product.price} detail={product.detail} id={product._id} key={product._id}/>
                    </Grid>
                ))
            }
        </Grid>
       </>
    
    
    </>
  )
}
