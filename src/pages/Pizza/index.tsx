import { FC } from 'react';
import { useProducts } from '../../hooks';
import { ErrorComponent, LoadingComponent, ProductsSection } from '../../components';
import { Box} from '@mui/material';

export const PizzaPage: FC = () => {

    const { isLoading, data, isError, page, pageChange } = useProducts({
        filterKey: "63516f6fc5a32a62d410b13c",
        pageSize:3
    });

  return (
    <Box sx={{ minHeight: '50vh' }}>
        {isLoading ? <LoadingComponent /> 
                :(
                    <ProductsSection
                    title='Pizzas'  
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
