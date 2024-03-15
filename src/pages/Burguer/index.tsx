import { FC } from 'react';
import { useProducts } from '../../hooks';
import { ErrorComponent, LoadingComponent, ProductsSection } from '../../components';
import { Box } from '@mui/material';

export const BurguerPage: FC = () => {

    const { isLoading, data, isError, page, pageChange } = useProducts({
        filterKey: "6554e39035611185a1cd55fe",
        pageSize:3
    });

  return (
    <Box sx={{ minHeight: '50vh' }}>
        {isLoading ? <LoadingComponent /> 
                :(
                    <ProductsSection 
                    title='Hamburguesas' 
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
