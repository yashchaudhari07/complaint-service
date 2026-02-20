import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
  Chip,
  Alert
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

const SubmitComplaint = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission logic
    const complaintId = `CPC-2026-${Math.floor(Math.random() * 10000)}`;
    alert(`Complaint submitted successfully! Your complaint ID is ${complaintId}`);
  };

  return (
    <DashboardLayout menuItems={citizenMenuItems} role="Citizen">
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Submit a New Complaint
        </Typography>
        {description.length > 50 && (
            <Alert severity="warning" sx={{ mb: 2 }}>
                Possible duplicate of complaint CPC-2026-0001.
            </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Complaint Title"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Description"
            margin="normal"
            multiline
            rows={4}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
           {description.length > 20 && (
             <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2">AI Suggested Category:</Typography>
                <Chip label="Road Damage" color="primary" />
            </Box>
           )}
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Category</InputLabel>
            <Select label="Category">
              <MenuItem value="road_damage">Road Damage</MenuItem>
              <MenuItem value="water_leakage">Water Leakage</MenuItem>
              <MenuItem value="electricity_issue">Electricity Issue</MenuItem>
              <MenuItem value="garbage_collection">Garbage Collection</MenuItem>
              <MenuItem value="street_light_issue">Street Light Issue</MenuItem>
              <MenuItem value="public_safety">Public Safety</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Location"
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Ward/Area</InputLabel>
            <Select label="Ward/Area">
              <MenuItem value="area1">Area 1</MenuItem>
              <MenuItem value="area2">Area 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Priority</InputLabel>
            <Select label="Priority">
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" component="label" sx={{ mt: 2 }}>
            Upload Image
            <input type="file" hidden />
          </Button>
          <Button variant="contained" component="label" sx={{ mt: 2, ml: 2 }}>
            Upload Video (Optional)
            <input type="file" hidden />
          </Button>
          <FormControlLabel
            control={
              <Switch
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
              />
            }
            label="Submit Anonymously"
            sx={{ mt: 2, display: 'block' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Submit Complaint
          </Button>
        </Box>
      </Container>
    </DashboardLayout>
  );
};

export default SubmitComplaint;
