import { Grid, Box, Paper, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProductsTable } from "../../components/ProductsTable";
import { ProductsForm } from "../../components/ProductsForm";
import { ModalComponent } from "../../components/ModalComponent";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
//   textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Products = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Typography variant='h3' sx={{ padding:'2rem', textTransform:'uppercase', fontWeight:'900' }}>Productos</Typography>
        <ModalComponent children={<ProductsForm />} title="Crear Producto" btnStyle="contained" btnName="Crear Producto"/>
      </Stack>

      <Grid container spacing={2} sx={{ width: '100%', justifyContent: 'center'  }}>
        <Grid item xs={12}>
          <Item><ProductsTable /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
