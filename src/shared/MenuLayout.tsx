import { Container } from '@mui/material';
import { MenuComponent } from '../components/MenuComponent';
import { Outlet } from 'react-router-dom';
import { AboutUsSection, BannerSection, ContactSection, RestaurantHero, TestimonialsSection } from '../components';
import { Footer } from './footer';
import { PromoPage } from '../pages/Promotion';

export const MenuLayout = () => {
  return (
    <div>
        <RestaurantHero />
        <AboutUsSection />
        <BannerSection />
        <PromoPage />
        <MenuComponent />
        <Container style={{ marginTop: '1rem' }}>
            <Outlet />
        </Container>
        <TestimonialsSection />
        <ContactSection />
        <Footer />
    </div>
  )
}
