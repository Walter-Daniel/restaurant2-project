import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for navigation

// Replace with your actual restaurant images
import image1 from '../../assets/pizzas/hamburguesa.png';
import image2 from '../../assets/pizzas/pizza.png';
import image3 from '../../assets/pizzas/milanesa.png';

const RestaurantHero: React.FC = () => {
  const theme = useTheme();

  const styles = {
    hero: {
    //   backgroundImage: `url(${image1})`, 
    //   backgroundSize: 'cover',
      // backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.getContrastText(theme.palette.background.default), // Ensure text is readable over image
    },
    heroContent: {
      display: 'flex',
      // justifyContent: 'space-between',
      alignItems: 'center',
      // maxWidth: 'lg', // Limit container width for responsiveness
      // mx: 'auto', // Add margin for centering
    },
    leftSection: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '3rem'
    },
    rightSection: {
      display: 'flex',
      flexDirection: 'center',
  
      alignItems: 'center',
    },
    title: {
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2),
    },
    button: {
      variant: 'contained',
    },
    seccionDerecha: {
      // display: 'flex',
      // alignItems: 'center',
      // position: 'relative',
    },
    circulo: {
      width: '25rem',
      height: '25rem',
      borderRadius: '50%',
      border: '1px solid rgb(243 221 207)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagenes: {
      position: 'absolute',
      top: '-25px', // Ajusta para colocar las imágenes sobre el círculo
      left: '-25px', // Ajusta para centrar las imágenes alrededor del círculo
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    imagen: {
      width: '75px',
      height: '75px',
      borderRadius: '50%',
      border: '2px solid #fff',
      objectFit: 'cover',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 3))'
    },
    rectangulo: {
      position: 'absolute',
      right: 0,
      top: 70,
      height: '90%',
      width: '25%',
      backgroundColor: '#FFD700',
      borderRadius: '30px 0px 0px 30px'
    },
  };

  

  return (
  <Box sx={styles.hero} position='relative'>
    <Grid container sx={{ padding:'0 2rem' }}>
      <Grid item xs={12} sm={6} sx={styles.heroContent}>
        <Box sx={styles.leftSection}>
          <Typography variant="h4" sx={styles.title} color='grey' >
            Sabor en Cada Bocado
          </Typography>
          <Typography variant='h4' textTransform='uppercase' fontWeight='900' marginBottom={2}>
            Sumérgete en un Mundo de Sabor: <br />
            <span style={{ color:'#d90429' }}>Una Experiencia Gastronómica Única</span>
          </Typography>
          <Typography marginBottom={2}>
            Descubre sabores rápidos con un toque gourmet en Bon Appétit. Desde jugosas hamburguesas hasta crujientes papas fritas, cada bocado es una fiesta para tus papilas gustativas. ¡Únete a nosotros y celebra el sabor!
          </Typography>
          <Link to="/menu">
            <Button variant="contained" sx={styles.button}>
              Explore Menu
            </Button>
          </Link>
        </Box>
        <Box sx={styles.rectangulo} zIndex={-100} />
      </Grid>
      <Grid item xs={12} sm={6} sx={styles.heroContent}>
        <Box sx={styles.rightSection} justifyContent={'center'} width='100%'>
          <img src={image2} alt="Restaurant Image 2" style={{height:'80vh', width: '100%', objectFit:'contain', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))' }} />
        </Box>
      </Grid>
    </Grid>
  </Box>
  );
};

export default RestaurantHero;
