import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
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

const citizenMenuItems = [
    { text: 'Dashboard', path: '/citizen/dashboard', icon: <DashboardIcon /> },
    { text: 'Submit Complaint', path: '/citizen/submit-complaint', icon: <AddCircleOutline /> },
    { text: 'My Complaints', path: '/citizen/my-complaints', icon: <ListAlt /> },
    { text: 'Profile', path: '/citizen/profile', icon: <Person /> },
    { text: 'Notifications', path: '/citizen/notifications', icon: <Notifications /> },
    { text: 'Logout', path: '/login', icon: <ExitToApp /> },
  ];

const CitizenProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <DashboardLayout menuItems={citizenMenuItems} role="Citizen">
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Box component="form">
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            defaultValue="John Doe"
            disabled={!isEditMode}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            defaultValue="john.doe@example.com"
            disabled
          />
          <TextField
            fullWidth
            label="Phone"
            margin="normal"
            defaultValue="123-456-7890"
            disabled={!isEditMode}
          />
          <TextField
            fullWidth
            label="Address"
            margin="normal"
            defaultValue="123 Main St, Anytown, USA"
            disabled={!isEditMode}
          />
          {isEditMode ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsEditMode(false)}
            >
              Save Profile
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsEditMode(true)}
            >
              Edit Profile
            </Button>
          )}
          <Button variant="outlined" color="secondary" sx={{ ml: 2 }}>
            Change Password
          </Button>
        </Box>
      </Container>
    </DashboardLayout>
  );
};

export default CitizenProfile;
