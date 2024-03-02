import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Error404Page: React.FC = () => {
  return (
    <Container>
       <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh', // Establecer altura al 100% del viewport
        }}
      >
        <Typography variant="h1" gutterBottom>
          404 - Página no encontrada
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          Lo sentimos, la página que estás buscando no existe.
        </Typography>
        <Button variant="contained" component={Link} to="/" color="primary">
          Ir a la página de inicio
        </Button>
      </Box>
    </Container>
  );
};

