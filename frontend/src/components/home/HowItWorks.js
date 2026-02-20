import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { HowToReg, RateReview, DoneAll } from '@mui/icons-material';

const steps = [
  {
    icon: <HowToReg fontSize="large" />,
    title: 'Register & Submit',
    description: 'Quickly register and submit your complaint with all the necessary details.',
  },
  {
    icon: <RateReview fontSize="large" />,
    title: 'Officer Review',
    description: 'An assigned officer will review your complaint and take necessary actions.',
  },
  {
    icon: <DoneAll fontSize="large" />,
    title: 'Get Resolution',
    description: 'Track the status of your complaint and get it resolved in a timely manner.',
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          How It Works
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>{step.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {step.title}
                </Typography>
                <Typography>{step.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
