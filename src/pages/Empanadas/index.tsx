import { FC } from 'react';
import { useProducts } from '../../hooks';
import {  ErrorComponent, LoadingComponent, ProductsSection} from '../../components';
import { Box } from '@mui/material';

export const EmpanadaPage: FC = () => {

    const { isLoading, data, isError, page, pageChange } = useProducts({
        filterKey: "635170dcc5a32a62d410b13e",
        pageSize:3
    });

      console.log({data}, 'desde empanadas')
  return (
    <Box sx={{ minHeight: '50vh' }}>
        {isLoading ? <LoadingComponent /> 
                :(
                    <ProductsSection
                    title='Empanadas'  
                    page={page}
                    products={data.products}
                    totalPages={data.totalPages}
                    pageChange={pageChange}
                    />
                )
        }
        {isError && <ErrorComponent />}
    </Box>
  )
}
