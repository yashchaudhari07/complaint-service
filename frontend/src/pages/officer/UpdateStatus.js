import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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

const UpdateStatus = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Complaint status updated successfully!');
  };

  return (
    <DashboardLayout menuItems={officerMenuItems} role="Officer">
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Update Complaint Status
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Complaint ID"
            margin="normal"
            defaultValue="CPC-2026-0001"
            disabled
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Status</InputLabel>
            <Select label="Status">
              <MenuItem value="in_progress">In Progress</MenuItem>
              <MenuItem value="resolved">Resolved</MenuItem>
              <MenuItem value="rejected">Rejected</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Remarks"
            margin="normal"
            multiline
            rows={4}
            required
          />
          <TextField
            fullWidth
            label="Expected Resolution Date"
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="contained" component="label" sx={{ mt: 2 }}>
            Upload Resolution Image
            <input type="file" hidden />
          </Button>
          <Box sx={{ mt: 3 }}>
            <Button type="submit" variant="contained" color="primary">
              Update Status
            </Button>
            <Button variant="contained" color="success" sx={{ ml: 2 }}>
              Mark as Resolved
            </Button>
            <Button variant="outlined" color="error" sx={{ ml: 2 }}>
              Escalate to Admin
            </Button>
          </Box>
        </Box>
      </Container>
    </DashboardLayout>
  );
};

export default UpdateStatus;
