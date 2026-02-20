import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            About Our System
          </Typography>
          <Typography variant="body1" paragraph>
            The Smart Public Complaint & Issue Tracking System is a modern solution designed to bridge the gap between citizens and government administration. Our platform provides a transparent, efficient, and user-friendly way for citizens to report public issues, and for government officers to track, manage, and resolve them.
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to foster a culture of accountability and transparency in public service delivery. We aim to empower citizens by giving them a direct channel to voice their concerns and to provide government bodies with the tools they need to respond effectively. By streamlining the complaint resolution process, we hope to improve the quality of public infrastructure and services for everyone.
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Key Objectives
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Typography component="li" variant="body1">
              Provide a single, centralized platform for all public complaints.
            </Typography>
            <Typography component="li" variant="body1">
              Ensure every complaint is tracked from submission to resolution.
            </Typography>
            <Typography component="li" variant="body1">
              Improve communication between citizens and government officials.
            </Typography>
            <Typography component="li" variant="body1">
              Generate actionable data and analytics to help identify recurring issues and improve public services.
            </Typography>
            <Typography component="li" variant="body1">
              Enhance transparency and build public trust.
            </Typography>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default About;
