import { FC } from 'react';
import { useProducts } from '../../hooks';
import { ErrorComponent, LoadingComponent, ProductsSection } from '../../components';
import { Box,  } from '@mui/material';

export const SandwichPage: FC = () => {

    const { isLoading, data, isError, page, pageChange } = useProducts({
        filterKey: "63517341c3c4679da104dd3f",
        pageSize: 3
    });
    
    
  return (
    <Box sx={{ minHeight: '50vh' }}>
       {isLoading ? <LoadingComponent /> 
                  :(
                   <ProductsSection  
                    title='Sandwiches'
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
