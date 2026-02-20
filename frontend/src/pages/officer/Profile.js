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
  Assignment,
  Update,
  Assessment,
  Person,
  ExitToApp,
} from '@mui/icons-material';

const officerMenuItems = [
    { text: 'Dashboard', path: '/officer/dashboard', icon: <DashboardIcon /> },
    { text: 'Assigned Complaints', path: '/officer/assigned-complaints', icon: <Assignment /> },
    { text: 'Update Status', path: '/officer/update-status', icon: <Update /> },
    { text: 'Reports', path: '/officer/reports', icon: <Assessment /> },
    { text: 'Profile', path: '/officer/profile', icon: <Person /> },
    { text: 'Logout', path: '/login', icon: <ExitToApp /> },
  ];

const OfficerProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <DashboardLayout menuItems={officerMenuItems} role="Officer">
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Box component="form">
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            defaultValue="Officer Smith"
            disabled={!isEditMode}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            defaultValue="officer.smith@example.gov"
            disabled
          />
          <TextField
            fullWidth
            label="Phone"
            margin="normal"
            defaultValue="098-765-4321"
            disabled={!isEditMode}
          />
          <TextField
            fullWidth
            label="Department"
            margin="normal"
            defaultValue="Public Works"
            disabled={!isEditMode}
          />
           <TextField
            fullWidth
            label="Badge ID"
            margin="normal"
            defaultValue="PWD-123"
            disabled
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

export default OfficerProfile;
