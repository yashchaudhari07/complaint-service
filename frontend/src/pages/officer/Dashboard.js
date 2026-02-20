import React from 'react';
import { Box, Grid, Paper, Typography, Avatar } from '@mui/material';
import { Assignment, HourglassEmpty, CheckCircle } from '@mui/icons-material';
import DashboardLayout from '../../layouts/DashboardLayout';
import {
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  Update,
  Assessment,
  Person,
  ExitToApp,
} from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const officerMenuItems = [
  { text: 'Dashboard', path: '/officer/dashboard', icon: <DashboardIcon /> },
  { text: 'Assigned Complaints', path: '/officer/assigned-complaints', icon: <AssignmentIcon /> },
  { text: 'Update Status', path: '/officer/update-status', icon: <Update /> },
  { text: 'Reports', path: '/officer/reports', icon: <Assessment /> },
  { text: 'Profile', path: '/officer/profile', icon: <Person /> },
  { text: 'Logout', path: '/login', icon: <ExitToApp /> },
];

const data = [
    { name: 'Jan', resolved: 65 },
    { name: 'Feb', resolved: 59 },
    { name: 'Mar', resolved: 80 },
    { name: 'Apr', resolved: 81 },
    { name: 'May', resolved: 56 },
    { name: 'Jun', resolved: 55 },
  ];

const StatCard = ({ title, value, icon, color }) => (
    <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
            <Typography variant="h6" color="text.secondary">{title}</Typography>
            <Typography variant="h4">{value}</Typography>
        </Box>
        <Avatar sx={{ bgcolor: color, width: 56, height: 56 }}>
            {icon}
        </Avatar>
    </Paper>
);

const OfficerDashboard = () => {
  return (
    <DashboardLayout menuItems={officerMenuItems} role="Officer">
      <Typography variant="h4" gutterBottom>
        Officer Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
            <StatCard title="Total Assigned" value="25" icon={<Assignment />} color="#1976D2" />
        </Grid>
        <Grid item xs={12} sm={4}>
            <StatCard title="Pending" value="10" icon={<HourglassEmpty />} color="#FFA000" />
        </Grid>
        <Grid item xs={12} sm={4}>
            <StatCard title="Resolved Today" value="2" icon={<CheckCircle />} color="#388E3C" />
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Performance Chart (Complaints Resolved)</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="resolved" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default OfficerDashboard;
