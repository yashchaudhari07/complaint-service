import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  Typography,
  Box,
  TextField,
  MenuItem,
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
import complaintsData from '../../data/complaints.json';
import { useNavigate } from 'react-router-dom';

const citizenMenuItems = [
    { text: 'Dashboard', path: '/citizen/dashboard', icon: <DashboardIcon /> },
    { text: 'Submit Complaint', path: '/citizen/submit-complaint', icon: <AddCircleOutline /> },
    { text: 'My Complaints', path: '/citizen/my-complaints', icon: <ListAlt /> },
    { text: 'Profile', path: '/citizen/profile', icon: <Person /> },
    { text: 'Notifications', path: '/citizen/notifications', icon: <Notifications /> },
    { text: 'Logout', path: '/login', icon: <ExitToApp /> },
  ];

const getStatusChipColor = (status) => {
  switch (status) {
    case 'Pending':
      return 'error';
    case 'In Progress':
      return 'warning';
    case 'Under Review':
      return 'info';
    case 'Resolved':
      return 'success';
    case 'Rejected':
      return 'default';
    default:
      return 'default';
  }
};

const MyComplaints = () => {
    const navigate = useNavigate();
    const [complaints, setComplaints] = useState(complaintsData);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredComplaints = complaints.filter((complaint) =>
        complaint.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleViewDetails = (id) => {
        navigate(`/citizen/complaint/${id}`);
    }

  return (
    <DashboardLayout menuItems={citizenMenuItems} role="Citizen">
      <Typography variant="h4" gutterBottom>
        My Complaints
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <TextField
                label="Search by title"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{ flexGrow: 1 }}
            />
            <TextField label="Status" select sx={{ minWidth: 150 }}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="resolved">Resolved</MenuItem>
            </TextField>
            <Button variant="contained">Apply Filters</Button>
        </Box>
      </Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Complaint ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredComplaints.map((complaint) => (
              <TableRow key={complaint.id}>
                <TableCell>{complaint.id}</TableCell>
                <TableCell>{complaint.title}</TableCell>
                <TableCell>{complaint.category}</TableCell>
                <TableCell>{complaint.date}</TableCell>
                <TableCell>{complaint.priority}</TableCell>
                <TableCell>
                  <Chip
                    label={complaint.status}
                    color={getStatusChipColor(complaint.status)}
                  />
                </TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleViewDetails(complaint.id)}>View Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
};

export default MyComplaints;
