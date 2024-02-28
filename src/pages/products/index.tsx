import { Grid, Box, Paper, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Column, ProductsTable } from "../../components/ProductsTable";
import { ProductsForm } from "../../components/ProductsForm";
import { ModalComponent } from "../../components/ModalComponent";
import { Product } from '../../interfaces/product';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

const productsData: Product[] = [
  { _id: '1', name: 'Product 1', detail: 'Description 1', price: 10.99, category: {_id: '1', name:'pizza'}, active:true, promo:false},
  { _id: '2', name: 'Product 2', detail: 'Description 2', price: 20.99, category: {_id: '2', name:'pizza'}, active: false, promo: true},
  { _id: '3', name: 'Product 3', detail: 'Description 3', price: 15.99, category: {_id: '3', name:'pizza'}, active: true, promo: true},
  { _id: '4', name: 'Product 4', detail: 'Description 4', price: 12.99, category: {_id: '4', name:'pizza'}, active: false, promo: false},
  { _id: '5', name: 'Product 5', detail: 'Description 5', price: 18.99, category: {_id: '5', name:'pizza'}, active: true, promo: false }
];

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
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Typography variant='h3' sx={{ padding:'2rem', textTransform:'uppercase', fontWeight:'900' }}>Productos</Typography>
        <ModalComponent children={<ProductsForm />} title="Crear Producto" btnStyle="contained" btnName="Crear Producto"/>
      </Stack>

      <Grid container spacing={2} sx={{ width: '100%', justifyContent: 'center'  }}>
        <Grid item xs={12}>
          <Item><ProductsTable<Product> data={productsData} columns={productColumns} /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
