import { Container } from '@mui/material';
import { MenuComponent } from '../components/MenuComponent';
import { Outlet } from 'react-router-dom';
import { RestaurantHero } from '../components';

export const MenuLayout = () => {
  return (
    <div>
        <RestaurantHero />
        <MenuComponent />
        <Container style={{ marginTop: '4rem' }}>
            <Outlet />
        </Container>
    </div>
  )
}
