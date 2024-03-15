import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid, Container } from '@mui/material';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar los datos del formulario
    console.log(formData);
    // Puedes restablecer el estado del formulario después del envío
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Container sx={{ marginTop:'3rem' }}> 
      <Typography variant="h2" sx={{ fontSize:'1.8rem', fontWeight:600, textTransform:'uppercase', marginBottom:'2rem' }}>
        Contáctanos
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box maxWidth={400} mx="auto">
            <Typography variant="h5" gutterBottom>
              Formulario de Contacto
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant="outlined"
                label="Nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Correo Electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Mensaje"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Enviar
              </Button>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box maxWidth={400} mx="auto">
            <Typography variant="h5" gutterBottom>
              Información de Contacto
            </Typography>
            <Typography variant="body1" gutterBottom>
              Teléfono: +123456789
            </Typography>
            <Typography variant="body1" gutterBottom>
              Correo Electrónico: info@example.com
            </Typography>
            <Typography variant="h5" gutterBottom>
              Redes Sociales
            </Typography>
            <Box display="flex" justifyContent="space-between">
              {/* Agrega íconos o enlaces a tus redes sociales aquí */}
            </Box>
            <Typography variant="h5" gutterBottom>
              Ubicación
            </Typography>
            {/* Agrega tu mapa de ubicación (por ejemplo, Google Maps) aquí */}
            {/* Puedes integrar Google Maps usando un iframe o una biblioteca de mapas como react-google-maps */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
