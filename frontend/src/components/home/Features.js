import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { VerifiedUser, TrackChanges, NotificationsActive } from '@mui/icons-material';

const features = [
  {
    icon: <TrackChanges fontSize="large" />,
    title: 'Real-Time Tracking',
    description: 'Track the status of your complaint from submission to resolution.',
  },
  {
    icon: <VerifiedUser fontSize="large" />,
    title: 'Verified Officers',
    description: 'All complaints are handled by verified government officers.',
  },
  {
    icon: <NotificationsActive fontSize="large" />,
    title: 'Instant Notifications',
    description: 'Receive instant notifications on the progress of your complaint.',
  },
];

const Features = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography>{feature.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
