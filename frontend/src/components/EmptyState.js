import React from 'react';
import { Box, Typography } from '@mui/material';

const EmptyState = ({ message }) => {
  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      <Typography variant="h6">{message}</Typography>
    </Box>
  );
};

export default EmptyState;
