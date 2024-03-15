import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

export const LoadingComponent: React.FC = () => {
  return (

      <Box
        sx={{
          height: '40vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress size={60} />
        <Typography variant="body1" gutterBottom align="center">
          Cargando...
        </Typography>
      </Box>

  );
};