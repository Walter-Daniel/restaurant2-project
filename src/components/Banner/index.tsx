import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Banner from '/banner.avif'; 

const styles = {
  bannerContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    height: '20vh'
  },
  textOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    paddingLeft:'2rem',
    textTransform:'uppercase'
  },
};

export const BannerSection = () => {
  const isSmallScreen = window.innerWidth <= 480;
  return (
    <Container style={{ marginTop:'2rem' }}>
      <Box component="div" sx={styles.bannerContainer}>
        <img
          src={Banner}
          height='100%'
          width='100%'
          alt="Promoción de Comidas"
          loading='lazy'
          style={{ objectFit: 'cover', filter: 'brightness(50%)' }}
          
        />
        <Grid container spacing={1} sx={styles.textOverlay}>
          <Grid item xs={6}>
            <Typography variant="h6" fontWeight='900' fontSize={isSmallScreen ? '1rem' : '3rem'} >
            No te lo pierdas 
            </Typography>
            <Typography variant="h6" fontWeight='900' fontSize={isSmallScreen ? '1.5rem' : '2rem'} >
            nuestras <span style={{ color: '#fbc02d' }}>promociones</span>
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign='center' marginTop='3rem'>
            <Button variant="contained" color="primary" href="#promociones" >
              Ir a Promoción
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
