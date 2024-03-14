import { FC } from 'react';
import { useProducts } from '../../hooks';
import { CardComponent, ErrorComponent, LoadingComponent } from '../../components';
import { Box, Grid, Pagination, Typography } from '@mui/material';

export const PizzaPage: FC = () => {

    const { isLoading, data, isError, page } = useProducts({
        filterKey: "63516f6fc5a32a62d410b13c"
    });

  return (
    <>
       {isLoading && <LoadingComponent />}
       {isError && <ErrorComponent />}
       
        <Box style={{minHeight: '85vh'}}>
            <Box padding='1rem' >
                <Typography  sx={{ fontSize:{xs:'2.5rem', md:'3rem'} }}>Pizzas</Typography>
            </Box>
            <Grid container spacing={2} direction="row" >
                {
                    data.products.map((product)=>(
                        <Grid item xs={12} sm={6} md={4}  key={product._id} sx={{ width: '100%', display:'flex', justifyContent:'center' }}>
                            <CardComponent name={product.name} price={product.price} detail={product.detail} id={product._id} key={product._id}/>
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
        <Box display='flex' justifyContent='center' padding='1rem'>
            <Pagination page={page} color="primary" count={data.totalPages} />
        </Box>
    </>
  )
}
