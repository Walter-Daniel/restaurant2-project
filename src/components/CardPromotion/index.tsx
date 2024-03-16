import { FC } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import pizza from '../../assets/pizzas/peperoni.jpg';

type Props = {
    name: string;
    price: number;
    detail: string;
    id: string;
};

export const CardPromotionComponent: FC<Props> = ({ name, price, detail, id }) => {
  const { user } = useAppSelector((state) => state.authReducer);

  return (
    <Card
      sx={{
        maxWidth: 230,
        borderRadius: '4px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        border: '1px solid transparent',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        '&:hover': {
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          borderColor: '#ccc',
          transform: 'translateY(-5px)',
        },
        position: 'relative',
        overflow:'revert'
         // Añadir posición relativa para el listón
      }}
      key={id}
    >
        <Box
          sx={{
            position: 'absolute',
          top: -5, // Ajuste para que el listón sobresalga fuera de la tarjeta
          right: -30, // Ajuste para que el listón sobresalga fuera de la tarjeta
          transform: 'rotate(45deg)', 
          backgroundColor: '#f50057',
          color: '#fff',
          padding: '4px 12px',
          zIndex: 1,
          }}
        >
          <Typography variant="body2">¡Promoción!</Typography>
        </Box>
  
      <CardMedia sx={{ height: 200 }} image={pizza} title={name} />
      <CardContent sx={{ minHeight: 135, maxHeight: 135, width: 300 }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {detail}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', marginTop: '0.3rem' }}>
          Precio: 

          <span style={{ textDecoration: 'line-through', marginRight: '0.5rem' }}>${price}</span>
          <span style={{ color: '#f50057' }}>$1000</span>
        </Typography>
      </CardContent>
      {user.role === 'USER_ROLE' && (
        <CardActions>
          <Button variant="contained" fullWidth>
            Comprar
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
