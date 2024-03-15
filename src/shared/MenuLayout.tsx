import { Container } from '@mui/material';
import { MenuComponent } from '../components/MenuComponent';
import { Outlet } from 'react-router-dom';
import { AboutUsSection, ContactSection, RestaurantHero, TestimonialsSection } from '../components';
import { Footer } from './footer';

export const MenuLayout = () => {
  return (
    <div>
        <RestaurantHero />
        <AboutUsSection />
        <MenuComponent />
        <Container style={{ marginTop: '4rem' }}>
            <Outlet />
        </Container>
        <TestimonialsSection />
        <ContactSection />
        <Footer />
    </div>
  )
}
