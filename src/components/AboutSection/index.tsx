import React from 'react';
import { Typography,Grid, Container } from '@mui/material';

export const AboutUsSection: React.FC = () => {
  return (
    <Container sx={{ marginTop:'3rem' }}>
      <Grid container>
        <Grid item >
          <Typography variant="h2" sx={{ fontSize:'1.8rem', fontWeight:600, textTransform:'uppercase', marginBottom:'2rem' }}>
            Acerca de Nosotros
          </Typography>
          <Typography variant="body1"  paragraph>
            Bon Appétit es una casa de comida dedicada a ofrecer deliciosas y saludables opciones para satisfacer tu paladar. Nos esforzamos por utilizar ingredientes frescos y de alta calidad en todas nuestras recetas.
          </Typography>
          <Typography variant="body1"  paragraph>
            Nuestro equipo de chefs expertos está comprometido a brindarte una experiencia culinaria única. Ya sea que estés buscando un rápido bocado para llevar o una comida para disfrutar en nuestro acogedor comedor, ¡Bon Appétit tiene algo para todos!
          </Typography>
          <Typography variant="body1" >
            ¡Visítanos hoy y déjanos deleitarte con nuestras deliciosas creaciones!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

