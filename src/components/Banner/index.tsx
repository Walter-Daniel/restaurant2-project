import { Box, Container } from '@mui/material';
import Banner from '/banner.avif'; // Importa tu componente de Banner desde el archivo correspondiente

export const BannerSection = () => {
  return (
    <Container>
     <Box
      sx={{
        backgroundImage: `url(${Banner})`, // Ruta de la imagen de fondo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        py: 6,
        textAlign: 'center',
        height:'30vh'
      }}
      >
      </Box>
    </Container>
  );
};
