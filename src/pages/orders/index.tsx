import { ProductsForm, ModalComponent, OrdersTable, ErrorComponent, LoadingComponent  } from "../../components";
import { useOrders } from '../../hooks/useOrders';

import { Grid, Box, Paper, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  marginLeft: '1rem'
}));

export const Orders = () => {
  const ordersQuery = useOrders();
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Typography variant='h3' sx={{ padding:'2rem', textTransform:'uppercase', fontWeight:'900' }}>Ordenes</Typography>
        <ModalComponent children={<ProductsForm />} title="Crear Orden" btnStyle="contained" btnName="Crear Producto"/>
      </Stack>

      <Grid container spacing={2} sx={{ width: '100%', justifyContent: 'center'  }}>
        <Grid item xs={12}>
          
          <Item>
          {ordersQuery.isLoading ? (
              <LoadingComponent />
            ) : ordersQuery.data ? (
              <OrdersTable orders={ordersQuery.data}/>
            ) : (
              ordersQuery.isError && <ErrorComponent />
            )}
          
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
