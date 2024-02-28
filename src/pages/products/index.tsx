import { Grid, Box, Paper, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProductsTable } from "../../components/ProductsTable";
import { ProductsForm } from "../../components/ProductsForm";
import { ModalComponent } from "../../components/ModalComponent";

interface Column {
  label: string;
  field: string;
  align?: 'left' | 'center' | 'right';
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
//   textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const productsData = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99, category: 'Category 1', active: 'true', promo: 'false', image: 'image1.jpg' },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 20.99, category: 'Category 2', active: 'false', promo: 'true', image: 'image2.jpg' },
  { id: 3, name: 'Product 3', description: 'Description 3', price: 15.99, category: 'Category 1', active: 'true', promo: 'true', image: 'image3.jpg' },
  { id: 4, name: 'Product 4', description: 'Description 4', price: 12.99, category: 'Category 3', active: 'false', promo: 'false', image: 'image4.jpg' },
  { id: 5, name: 'Product 5', description: 'Description 5', price: 18.99, category: 'Category 2', active: 'true', promo: 'false', image: 'image5.jpg' }
];

const productColumns: Column[] = [
  { label: 'ID', field: 'id' },
  { label: 'Name', field: 'name' },
  { label: 'Description', field: 'description' },
  { label: 'Price', field: 'price' },
  { label: 'Category', field: 'category' },
  { label: 'Active', field: 'active' },
  { label: 'Promotion', field: 'promo' },
  { label: 'Image', field: 'image' },
  // Añadir más columnas si es necesario
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
          <Item><ProductsTable data={productsData} columns={productColumns} /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
