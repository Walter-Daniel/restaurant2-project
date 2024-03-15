import { Box, Typography, Link } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { styled } from '@mui/system';


const StyledFooter = styled(Box)(({ theme }) => ({
    backgroundColor: '#000',
    color: '#fff',
    padding: '16px',
    textAlign: 'center',
    marginTop: '2rem',
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
        Copyright © 2024 - Todos los derechos reservados.
      </Typography>
      <Box mt={1}>
        <Link href="https://www.facebook.com/" className="socialLink" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </Link>
        <Link href="https://www.instagram.com/" className="socialLink" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </Link>
        <Link href="https://twitter.com/" className="socialLink" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </Link>
      </Box>
    </StyledFooter>
  );
};
