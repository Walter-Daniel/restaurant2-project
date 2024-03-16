import { Box, Breadcrumbs, Container, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const menuLinks = [
  {
    link: '/',
    name: 'Empanadas'
  },
  {
    link: '/hamburguesas',
    name: 'Hamburguesas'
  },
  {
    link: '/pizzas',
    name: 'Pizzas'
  },
  {
    link: '/sandwiches',
    name: 'Sandwiches'
  }
]

export const MenuComponent = () => {
  return (
    <Container sx={{ marginTop:'3rem' }}>
      <Box display='flex' justifyContent='center' bgcolor='black' sx={{ padding:'1rem' }} color='white'>
          <Breadcrumbs aria-label="breadcrumb" sx={{ color:'white' }}>
          {
            menuLinks.map(item => (
              <Link
                  underline="hover"
                  component={RouterLink}
                  color="white"
                  to={item.link}
                  key={item.link}
              >
                  {item.name}
              </Link>
            ))
          }
          </Breadcrumbs>
      </Box>
    </Container>
  )
}
