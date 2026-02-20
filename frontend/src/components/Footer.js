import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#0D47A1', color: 'white', p: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © 2026 Smart Public Complaint System
        </Typography>
        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          Contact us: contact@gov-complaint.org
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton color="inherit" href="https://www.facebook.com" target="_blank">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="https://www.twitter.com" target="_blank">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com" target="_blank">
            <LinkedIn />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
