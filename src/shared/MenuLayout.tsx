import { Container } from '@mui/material';
import { MenuComponent } from '../components/MenuComponent';
import { Outlet } from 'react-router-dom';
import { AboutUsSection, BannerSection, ContactSection, RestaurantHero, TestimonialsSection } from '../components';
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
        <BannerSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
    </div>
  )
}
