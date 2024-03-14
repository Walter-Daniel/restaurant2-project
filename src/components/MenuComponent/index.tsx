import { Box, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const menuLinks = [
  {
    link: '/',
    name: 'Promociones'
  },
  {
    link: '/empanadas',
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
    <Box display='flex' justifyContent='center' >
        <Breadcrumbs aria-label="breadcrumb">

        {
          menuLinks.map(item => (
            <Link
                underline="hover"
                component={RouterLink}
                color="inherit"
                to={item.link}
                key={item.link}
            >
                {item.name}
            </Link>
          ))
        }
        </Breadcrumbs>
  </Box>
  )
}
