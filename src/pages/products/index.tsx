import { ProductsForm, TableComponent, ModalComponent, LoadingComponent, ErrorComponent  } from "../../components";
import { Column } from "../../components/TableComponent";
import { useProducts } from '../../hooks/useProducts';
import { Product } from '../../interfaces/product';

import { styled } from '@mui/material/styles';
import { Grid, Box, Paper, Typography, Stack } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

const productColumns: Column<Product>[] = [
  { label: 'ID', field: '_id' },
  { label: 'Name', field: 'name' },
  { label: 'Description', field: 'detail' },
  { label: 'Price', field: 'price' },
  { label: 'Category', field: 'category' },
  { label: 'Active', field: 'active' },
  { label: 'Promotion', field: 'promo' },
  // { label: 'Image', field: 'image' },
];
export const Products = () => {

  const productsQuery = useProducts();

  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Typography variant='h3' sx={{ padding:'2rem', textTransform:'uppercase', fontWeight:'900' }}>Productos</Typography>
        <ModalComponent children={<ProductsForm />} title="Crear Producto" btnStyle="contained" btnName="Crear Producto"/>
      </Stack>

      <Grid container spacing={2} sx={{ width: '100%', justifyContent: 'center'  }}>
        <Grid item xs={12}>
          <Item>
            {productsQuery.isLoading ? <LoadingComponent />
                                     :productsQuery.data ? <TableComponent<Product> data={productsQuery.data} columns={productColumns} />
                                     :<ErrorComponent />
          
            } 
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
