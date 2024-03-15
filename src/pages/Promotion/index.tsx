import { FC } from 'react';
import { ErrorComponent, LoadingComponent, ProductsSection } from '../../components';
import { Box } from '@mui/material';
import { usePromotions } from '../../hooks/usePromotion';

export const PromoPage: FC = () => {

    const { isLoading, data, isError, page, pageChange } = usePromotions({
        pageSize:3
    });

  return (
    <Box sx={{ minHeight: '50vh' }}>
        {isLoading ? <LoadingComponent /> 
                :(
                    <ProductsSection
                    title='Promociones'  
                    page={page}
                    products={data!.promoProducts}
                    totalPages={data!.totalPages}
                    pageChange={pageChange}
                    />
                )
        }
        {isError && <ErrorComponent />}
    </Box>
  )
}
