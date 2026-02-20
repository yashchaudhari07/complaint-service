import React from 'react';
import { Box, Grid, Paper, Typography, Avatar } from '@mui/material';
import { ListAlt, HourglassEmpty, CheckCircle } from '@mui/icons-material';
import DashboardLayout from '../../layouts/DashboardLayout';
import {
  Dashboard as DashboardIcon,
  AddCircleOutline,
  ListAlt as ListAltIcon,
  Person,
  Notifications,
  ExitToApp,
} from '@mui/icons-material';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const citizenMenuItems = [
  { text: 'Dashboard', path: '/citizen/dashboard', icon: <DashboardIcon /> },
  { text: 'Submit Complaint', path: '/citizen/submit-complaint', icon: <AddCircleOutline /> },
  { text: 'My Complaints', path: '/citizen/my-complaints', icon: <ListAltIcon /> },
  { text: 'Profile', path: '/citizen/profile', icon: <Person /> },
  { text: 'Notifications', path: '/citizen/notifications', icon: <Notifications /> },
  { text: 'Logout', path: '/login', icon: <ExitToApp /> },
];

const data = {
  labels: ['Pending', 'In Progress', 'Resolved'],
  datasets: [
    {
      label: '# of Complaints',
      data: [4, 2, 8],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 159, 64, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

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

const CitizenDashboard = () => {
  return (
    <DashboardLayout menuItems={citizenMenuItems} role="Citizen">
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <StatCard title="Total Complaints" value="14" icon={<ListAlt />} color="#1976D2" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard title="Pending" value="4" icon={<HourglassEmpty />} color="#FFA000" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard title="Resolved" value="8" icon={<CheckCircle />} color="#388E3C" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Recent Activity</Typography>
            {/* Implement a timeline component here */}
            <Typography>Complaint #1234 status updated to In Progress.</Typography>
            <Typography>Complaint #5678 resolved.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: 300 }}>
            <Typography variant="h6">Complaint Status</Typography>
            <Doughnut data={data} />
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default CitizenDashboard;
