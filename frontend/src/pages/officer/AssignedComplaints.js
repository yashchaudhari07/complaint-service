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
  Assignment,
  Update,
  Assessment,
  Person,
  ExitToApp,
} from '@mui/icons-material';
import complaintsData from '../../data/complaints.json';

const officerMenuItems = [
    { text: 'Dashboard', path: '/officer/dashboard', icon: <DashboardIcon /> },
    { text: 'Assigned Complaints', path: '/officer/assigned-complaints', icon: <Assignment /> },
    { text: 'Update Status', path: '/officer/update-status', icon: <Update /> },
    { text: 'Reports', path: '/officer/reports', icon: <Assessment /> },
    { text: 'Profile', path: '/officer/profile', icon: <Person /> },
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

const AssignedComplaints = () => {
  const [complaints, setComplaints] = useState(complaintsData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredComplaints = complaints.filter((complaint) =>
    complaint.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout menuItems={officerMenuItems} role="Officer">
      <Typography variant="h4" gutterBottom>
        Assigned Complaints
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
                <MenuItem value="in_progress">In Progress</MenuItem>
            </TextField>
            <Button variant="contained">Apply Filters</Button>
        </Box>
      </Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Complaint ID</TableCell>
              <TableCell>Citizen Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredComplaints.map((complaint) => (
              <TableRow key={complaint.id}>
                <TableCell>{complaint.id}</TableCell>
                <TableCell>John Doe</TableCell> {/* Mock citizen name */}
                <TableCell>{complaint.category}</TableCell>
                <TableCell>{complaint.priority}</TableCell>
                <TableCell>Some Location</TableCell> {/* Mock Location */}
                <TableCell>
                  <Chip
                    label={complaint.status}
                    color={getStatusChipColor(complaint.status)}
                  />
                </TableCell>
                <TableCell>
                  <Button variant="contained" sx={{ mr: 1 }}>View</Button>
                  <Button variant="outlined">Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
};

export default AssignedComplaints;
