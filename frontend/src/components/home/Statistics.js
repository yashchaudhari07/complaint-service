import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';

const stats = [
  {
    value: '10,000+',
    label: 'Complaints Submitted',
  },
  {
    value: '8,500+',
    label: 'Complaints Resolved',
  },
  {
    value: '95%',
    label: 'Resolution Rate',
  },
  {
    value: '500+',
    label: 'Officers Active',
  },
];

const Statistics = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Our Impact in Numbers
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="subtitle1">{stat.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Statistics;
