import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Rating,
  TextField,
  Button
} from '@mui/material';
import DashboardLayout from '../../layouts/DashboardLayout';
import {
  Dashboard as DashboardIcon,
  AddCircleOutline,
  ListAlt,
  Person,
  Notifications,
  ExitToApp,
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import complaints from '../../data/complaints.json';
import EmptyState from '../../components/EmptyState';

const citizenMenuItems = [
    { text: 'Dashboard', path: '/citizen/dashboard', icon: <DashboardIcon /> },
    { text: 'Submit Complaint', path: '/citizen/submit-complaint', icon: <AddCircleOutline /> },
    { text: 'My Complaints', path: '/citizen/my-complaints', icon: <ListAlt /> },
    { text: 'Profile', path: '/citizen/profile', icon: <Person /> },
    { text: 'Notifications', path: '/citizen/notifications', icon: <Notifications /> },
    { text: 'Logout', path: '/login', icon: <ExitToApp /> },
  ];

const steps = ['Submitted', 'Assigned', 'In Progress', 'Resolved'];

const getStepFromStatus = (status) => {
    switch (status) {
        case 'Pending':
            return 0;
        case 'Assigned':
            return 1;
        case 'In Progress':
            return 2;
        case 'Resolved':
            return 3;
        default:
            return 0;
    }
}

const ComplaintDetails = () => {
    const { id } = useParams();
    const complaint = complaints.find(c => c.id === id);

    if (!complaint) {
        return (
            <DashboardLayout menuItems={citizenMenuItems} role="Citizen">
                <EmptyState title="Complaint Not Found" message="The complaint you are looking for does not exist." />
            </DashboardLayout>
        )
    }

  return (
    <DashboardLayout menuItems={citizenMenuItems} role="Citizen">
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Complaint Details ({complaint.id})
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6">Title: {complaint.title}</Typography>
            <Typography variant="body1">
              {complaint.description}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">Timeline</Typography>
              <Stepper activeStep={getStepFromStatus(complaint.status)} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Officer Remarks</Typography>
            <Typography variant="body2">
              {complaint.officerRemarks || 'No remarks yet.'}
            </Typography>
          </Grid>
        </Grid>
        {complaint.status === 'Resolved' && (
            <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Feedback</Typography>
            <Rating name="feedback-rating" />
            <TextField
                fullWidth
                label="Your Feedback"
                margin="normal"
                multiline
                rows={3}
            />
            <Button variant="contained">Submit Feedback</Button>
            </Box>
        )}
      </Paper>
    </DashboardLayout>
  );
};

export default ComplaintDetails;
