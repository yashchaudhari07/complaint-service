import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Your Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Your Email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Subject"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Message"
            margin="normal"
            variant="outlined"
            multiline
            rows={6}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
