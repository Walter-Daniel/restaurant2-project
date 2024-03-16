import React, { useState } from 'react';
import { useNotification } from '../../context/notificationContext/useNotification';

import { Box, Button, TextField, Typography, Grid, Container } from '@mui/material';

import map from '/mapa.jpg'

export const ContactSection: React.FC = () => {

  const { getSuccess } = useNotification();

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
    console.log(formData);
    getSuccess('Mensaje enviado con éxito, pronto nos contactaremos contigo!');
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
            <Typography variant="h6" fontSize='0.8rem' textTransform='uppercase' fontWeight='600' color='gray' gutterBottom>
            ¿Listo para celebrar? <br />
            ¡Hagamos los arreglos para la comida juntos!
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
            <Typography variant="h6" fontSize='1.2rem' textTransform='uppercase' fontWeight='600' color='gray' gutterBottom>
              Información de Contacto
            </Typography>
            <Typography variant="body1" gutterBottom>
              Teléfono: +123456789
            </Typography>
            <Typography variant="body1" gutterBottom>
              Correo Electrónico: info@example.com
            </Typography>
            <Typography variant="h6" fontSize='1.2rem' textTransform='uppercase' fontWeight='600' color='gray' gutterBottom>
              Ubicación
            </Typography>
            <img
              src={`${map}?w=248&fit=crop&auto=format`}
              alt="mapa de Tucumán"
              loading="lazy"
              style={{ width:'100%', height:'100%' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
