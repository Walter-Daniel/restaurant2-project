import { ChangeEvent, FC } from 'react';
import { CardComponent } from '..';
import { Box, Grid, Pagination, Typography } from '@mui/material';
import { Product } from '../../interfaces/product';

interface Props {
    title: string;
    page: number;
    totalPages: number;
    products: Product[];
    pageChange : (newPage:number) => void;
}

export const ProductsSection: FC<Props> = ({title, page, totalPages, products, pageChange}) => {
    const handleChangePage = (event: ChangeEvent<unknown>, newPage:number) => {
        pageChange(newPage);
    };
  return (
    <>           
        <Box height='100%'>
            <Box padding='1rem' >
                <Typography variant='h5'>{title}</Typography>
            </Box>
            <Grid container spacing={2} direction="row" height='100%'>
                {
                    products.map((product)=>(
                        <Grid item xs={12} sm={6} md={4}  key={product._id} sx={{ width: '100%', display:'flex', justifyContent:'center'}}>
                            <CardComponent name={product.name} price={product.price} detail={product.detail} id={product._id} key={product._id}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Box> 
        <Box display='flex' justifyContent='center' padding='1rem'>
            <Pagination page={page} color="primary" count={totalPages} onChange={handleChangePage}/>
        </Box>
    </>
  )
}
