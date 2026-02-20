import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Smart Public Complaint & Issue Tracking System
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          A transparent and efficient way to get your voice heard. Submit your complaints and track their resolution in real-time.
        </Typography>
        <Box sx={{ pt: 4, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" component={Link} to="/register">
            File a Complaint
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
