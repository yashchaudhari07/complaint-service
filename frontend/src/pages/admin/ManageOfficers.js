import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
  Switch,
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

const officers = [
  { id: 1, name: 'Officer Smith', area: 'Area 1', performance: 'Good', active: true },
  { id: 2, name: 'Officer Jones', area: 'Area 2', performance: 'Excellent', active: true },
];

const ManageOfficers = () => {
  return (
    <DashboardLayout menuItems={adminMenuItems} role="Admin">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Manage Officers
        </Typography>
        <Button variant="contained">Add Officer</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Assigned Area</TableCell>
              <TableCell>Performance</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {officers.map((officer) => (
              <TableRow key={officer.id}>
                <TableCell>{officer.id}</TableCell>
                <TableCell>{officer.name}</TableCell>
                <TableCell>{officer.area}</TableCell>
                <TableCell>{officer.performance}</TableCell>
                <TableCell>
                  <Switch defaultChecked={officer.active} />
                </TableCell>
                <TableCell>
                  <Button sx={{ mr: 1 }}>Edit</Button>
                  <Button>View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
};

export default ManageOfficers;
