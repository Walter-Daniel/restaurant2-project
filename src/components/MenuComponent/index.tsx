import { Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const menuLinks = [
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
    <div>
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
  </div>
  )
}
