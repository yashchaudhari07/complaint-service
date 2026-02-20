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
  Checkbox,
} from '@mui/material';
import DashboardLayout from '../../layouts/DashboardLayout';
import {
  Dashboard as DashboardIcon,
  ListAlt,
  People,
  Category,
  Timeline,
  Warning,
  Settings,
  ExitToApp,
} from '@mui/icons-material';
import complaintsData from '../../data/complaints.json';

const adminMenuItems = [
    { text: 'Dashboard', path: '/admin/dashboard', icon: <DashboardIcon /> },
    { text: 'All Complaints', path: '/admin/all-complaints', icon: <ListAlt /> },
    { text: 'Manage Officers', path: '/admin/manage-officers', icon: <People /> },
    { text: 'Manage Categories', path: '/admin/manage-categories', icon: <Category /> },
    { text: 'Analytics', path: '/admin/analytics', icon: <Timeline /> },
    { text: 'Escalations', path: '/admin/escalations', icon: <Warning /> },
    { text: 'System Settings', path: '/admin/system-settings', icon: <Settings /> },
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

const AllComplaints = () => {
  const [complaints, setComplaints] = useState(complaintsData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredComplaints = complaints.filter((complaint) =>
    complaint.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout menuItems={adminMenuItems} role="Admin">
      <Typography variant="h4" gutterBottom>
        All Complaints
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Filters</Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
          <TextField
            label="Search by title"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ flexGrow: 1 }}
          />
          <TextField label="Start Date" type="date" InputLabelProps={{ shrink: true }} />
          <TextField label="End Date" type="date" InputLabelProps={{ shrink: true }} />
          <TextField label="Category" select sx={{ minWidth: 150 }}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="road_damage">Road Damage</MenuItem>
          </TextField>
          <TextField label="Status" select sx={{ minWidth: 150 }}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
          </TextField>
          <TextField label="Officer" select sx={{ minWidth: 150 }}>
            <MenuItem value="">All</MenuItem>
          </TextField>
          <Button variant="contained">Apply Filters</Button>
        </Box>
      </Paper>
      <Box sx={{ mb: 2 }}>
        <Button variant="outlined" sx={{ mr: 1 }}>Assign Officer</Button>
        <Button variant="outlined" sx={{ mr: 1 }}>Change Status</Button>
        <Button variant="outlined" color="error">Delete</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"><Checkbox /></TableCell>
              <TableCell>Complaint ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredComplaints.map((complaint) => (
              <TableRow key={complaint.id}>
                <TableCell padding="checkbox"><Checkbox /></TableCell>
                <TableCell>{complaint.id}</TableCell>
                <TableCell>{complaint.title}</TableCell>
                <TableCell>{complaint.category}</TableCell>
                <TableCell>
                  <Chip
                    label={complaint.status}
                    color={getStatusChipColor(complaint.status)}
                  />
                </TableCell>
                <TableCell>
                  <Button variant="contained">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
};

export default AllComplaints;
