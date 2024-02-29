import { Grid, Box, Paper, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProductsForm } from "../../components/ProductsForm";
import { ModalComponent } from "../../components/ModalComponent";
import { Order } from '../../interfaces/order';
import OrdersTable from '../../components/OrdersTable';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  marginLeft: '1rem'
}));

const orderData: Order[] = [
    { 
        _id: '1', 
        products: [
          { productId: {_id: '565421', name: 'Tostada', detail:'Quemada'}, quantity: 1, _id: 'order_product_1' } ,
          { productId: {_id: '78721', name: 'Tarta', detail:'Quemada'}, quantity: 1, _id: 'order_product_1' } 
        ],
        user: { 
          _id: 'user_1', 
          fullName: 'John Doe', 
          email: 'john@example.com', 
          active: true, 
          role: 'customer', 
          createdAt: '2024-02-28T00:00:00Z' 
        },
        total: 10.99,
        status: 'pending'
      },
      { 
        _id: '2', 
        products: [
          { productId: {_id: '544432', name: 'Pizza', detail:'A la piedra'}, quantity: 2, _id: 'order_product_2' } 
        ],
        user: { 
          _id: 'user_2', 
          fullName: 'Jane Smith', 
          email: 'jane@example.com', 
          active: true, 
          role: 'customer', 
          createdAt: '2024-02-28T00:00:00Z' 
        },
        total: 25.98,
        status: 'completed'
      },
      { 
        _id: '3', 
        products: [
          { productId: {_id: '565421', name: 'Tostada', detail:'Quemada'}, quantity: 1, _id: 'order_product_3' } 
        ],
        user: { 
          _id: 'user_3', 
          fullName: 'Alice Johnson', 
          email: 'alice@example.com', 
          active: true, 
          role: 'customer', 
          createdAt: '2024-02-28T00:00:00Z' 
        },
        total: 15.99,
        status: 'pending'
      },
      { 
        _id: '4', 
        products: [
          { productId: {_id: '544432', name: 'Pizza', detail:'A la piedra'}, quantity: 3, _id: 'order_product_4' } 
        ],
        user: { 
          _id: 'user_4', 
          fullName: 'Bob Williams', 
          email: 'bob@example.com', 
          active: true, 
          role: 'customer', 
          createdAt: '2024-02-28T00:00:00Z' 
        },
        total: 38.97,
        status: 'completed'
      },
      { 
        _id: '5', 
        products: [
          { productId: {_id: '223232', name: 'Tostada', detail:'Quemada'}, quantity: 2, _id: 'order_product_5' } 
        ],
        user: { 
          _id: 'user_5', 
          fullName: 'Emily Brown', 
          email: 'emily@example.com', 
          active: true, 
          role: 'customer', 
          createdAt: '2024-02-28T00:00:00Z' 
        },
        total: 37.98,
        status: 'pending'
      },
];

export const Orders = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Typography variant='h3' sx={{ padding:'2rem', textTransform:'uppercase', fontWeight:'900' }}>Ordenes</Typography>
        <ModalComponent children={<ProductsForm />} title="Crear Orden" btnStyle="contained" btnName="Crear Producto"/>
      </Stack>

      <Grid container spacing={2} sx={{ width: '100%', justifyContent: 'center'  }}>
        <Grid item xs={12}>
          <Item>

          <OrdersTable data={orderData}/>

          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
