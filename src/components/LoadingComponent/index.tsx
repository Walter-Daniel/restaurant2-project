import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

export const LoadingComponent: React.FC = () => {
  return (

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <CircularProgress size={60} />
        <Typography variant="body1" gutterBottom align="center">
          Cargando...
        </Typography>
      </Box>

  );
};