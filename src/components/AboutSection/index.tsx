import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

export const AboutUsSection: React.FC = () => {
  return (
    <Box py={8} bgcolor="#f0f0f0"> {/* Espaciado vertical y color de fondo */}
      <Grid container justifyContent="center">
        <Grid item xs={10} md={8}>
          <Typography variant="h2" align="center" gutterBottom>
            Acerca de Nosotros
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Bon Appétit es una casa de comida dedicada a ofrecer deliciosas y saludables opciones para satisfacer tu paladar. Nos esforzamos por utilizar ingredientes frescos y de alta calidad en todas nuestras recetas.
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Nuestro equipo de chefs expertos está comprometido a brindarte una experiencia culinaria única. Ya sea que estés buscando un rápido bocado para llevar o una comida para disfrutar en nuestro acogedor comedor, ¡Bon Appétit tiene algo para todos!
          </Typography>
          <Typography variant="body1" align="center">
            ¡Visítanos hoy y déjanos deleitarte con nuestras deliciosas creaciones!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

