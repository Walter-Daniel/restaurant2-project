import React from "react";
import { Typography, Grid, Container, Avatar } from "@mui/material";
import aboutIMG from "../../assets/about.avif";
import { yellow } from '@mui/material/colors';

export const AboutUsSection: React.FC = () => {
  return (
    <Container sx={{ marginTop: "3rem", minHeight:'60vh' }}>
      <Typography
        variant="h2"
        textAlign='center'
        sx={{
          fontSize: "3.4rem",
          fontWeight: 600,
          textTransform: "uppercase",
          marginBottom: "2rem",
        }}
      >
        Acerca de Nosotros
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          {/* <figure>
            <img
              src={aboutIMG}
              alt="about image"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </figure> */}
          <Avatar
            alt="Remy Sharp"
            src="/broken-image.jpg"
            sx={{ width: 200, height: 200, bgcolor: yellow[600] }}
          >  </Avatar>
          <Avatar
            alt="Remy Sharp"
            src={aboutIMG}
            sx={{ width: 200, height: 200 }}
          />
          <Avatar
            alt="Remy Sharp"
            src={aboutIMG}
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
        <Grid container item xs={6} justifyContent="center" alignItems="center">
          <Typography>
            Bon Appétit es una casa de comida dedicada a ofrecer deliciosas y
            saludables opciones para satisfacer tu paladar. Nos esforzamos por
            utilizar ingredientes frescos y de alta calidad en todas nuestras
            recetas.
          </Typography>
          <Typography>
            Nuestro equipo de chefs expertos está comprometido a brindarte una
            experiencia culinaria única. Ya sea que estés buscando un rápido
            bocado para llevar o una comida para disfrutar en nuestro acogedor
            comedor, ¡Bon Appétit tiene algo para todos!
          </Typography>
          <Typography>
            ¡Visítanos hoy y déjanos deleitarte con nuestras deliciosas
            creaciones!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
