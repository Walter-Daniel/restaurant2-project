import { Box, Typography, Avatar, Rating, Grid, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import man from '/hombre.jpg';
import woman from '/mujer1.jpg';
import woman2 from '/mujer2.jpg';

const testimonials = [
    {
      name: 'Juan Pérez',
      avatar: man,
      stars: 5,
      testimony: 'Excelente servicio, muy recomendable.',
    },
    {
      name: 'María García',
      avatar: woman,
      stars: 4,
      testimony: 'El producto llegó en perfectas condiciones.',
    },
    {
      name: 'Joao Lopez',
      avatar: woman2,
      stars: 5,
      testimony: 'El producto llegó en perfectas condiciones.',
    },
   
  ];
 export const TestimonialsSection= () => {
  return (
    <Container sx={{ marginTop:'3rem' }}>
      <Typography variant="h2"  sx={{ fontSize:'1.8rem', fontWeight:600, textTransform:'uppercase', marginBottom:'1rem' }}>
        Testimonios
      </Typography>
      <Grid container spacing={2} direction="row">
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} sm={6} md={4} sx={{ width: '100%', display:'flex', justifyContent:'center' }} key={testimonial.name}>
        <Box key={index} sx={{ my: 2, width:'267px' }}>

        <Rating
            name="customized-color"
            value={testimonial.stars}
            // emptyIcon={<StarBorderIcon style={{ color: red[500] }} />}
            icon={<StarIcon style={{ color: 'white', border:'1px solid gold', backgroundColor:'gold', margin:'1px' }} />}
            />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'flex-start'}}>
            <Avatar
              alt={testimonial.name}
              src={testimonial.avatar}
              sx={{ mr: 2 }}
            />
            <Typography variant="body1">{testimonial.name}</Typography>
          </Box>
          
          <Typography variant="body2" sx={{ mt: 1, fontStyle:'italic' }}>
          "{testimonial.testimony}"
          </Typography>
        </Box>
        </Grid>
      ))}
      </Grid>
    </Container>
  );
};
