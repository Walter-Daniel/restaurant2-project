import { Box, Typography, Avatar, Rating, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
    {
      name: 'Juan Pérez',
      avatar: 'https://example.com/avatar1.jpg',
      stars: 5,
      testimony: 'Excelente servicio, muy recomendable.',
    },
    {
      name: 'María García',
      avatar: 'https://example.com/avatar2.jpg',
      stars: 4,
      testimony: 'El producto llegó en perfectas condiciones.',
    },
    {
      name: 'Joao Lopez',
      avatar: 'https://example.com/avatar2.jpg',
      stars: 5,
      testimony: 'El producto llegó en perfectas condiciones.',
    },
   
  ];
 export const TestimonialsSection= () => {
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight:600, textTransform:'uppercase' }}>
        Testimonios
      </Typography>
      <Grid container spacing={2} direction="row">
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} sm={6} md={4} sx={{ width: '100%', display:'flex', justifyContent:'center' }}>
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
          
          <Typography variant="body2" sx={{ mt: 1 }}>
            {testimonial.testimony}
          </Typography>
        </Box>
        </Grid>
      ))}
      </Grid>
    </Box>
  );
};
