import { Box, Typography, Link } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { styled } from '@mui/system';


const StyledFooter = styled(Box)(({ theme }) => ({
    backgroundColor: '#333',
    color: '#fff',
    padding: '16px',
    textAlign: 'center',
    // position: 'fixed',
    bottom: 0,
    width: '100%',
  
    '& .socialLink': {
      color: '#fff',
      textDecoration: 'none',
      marginRight: '16px',
      fontSize: '18px',
    },
  }));

export const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body2">
        Copyright © 2023 - Todos los derechos reservados.
      </Typography>
      <Box mt={1}>
        <Link href="https://www.facebook.com/" className="socialLink">
          <Facebook />
        </Link>
        <Link href="https://www.instagram.com/" className="socialLink">
          <Instagram />
        </Link>
        <Link href="https://twitter.com/" className="socialLink">
          <Twitter />
        </Link>
      </Box>
    </StyledFooter>
  );
};
