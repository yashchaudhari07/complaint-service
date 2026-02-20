import React from 'react';
import { Box, Grid, Paper, Typography, Avatar } from '@mui/material';
import { ListAlt, People, CheckCircle, HourglassEmpty, Warning } from '@mui/icons-material';
import DashboardLayout from '../../layouts/DashboardLayout';
import {
  Dashboard as DashboardIcon,
  ListAlt as ListAltIcon,
  People as PeopleIcon,
  Category,
  Timeline,
  Warning as WarningIcon,
  Settings,
  ExitToApp,
} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ComplaintHeatmap from '../../components/ComplaintHeatmap';

const adminMenuItems = [
  { text: 'Dashboard', path: '/admin/dashboard', icon: <DashboardIcon /> },
  { text: 'All Complaints', path: '/admin/all-complaints', icon: <ListAltIcon /> },
  { text: 'Manage Officers', path: '/admin/manage-officers', icon: <PeopleIcon /> },
  { text: 'Manage Categories', path: '/admin/manage-categories', icon: <Category /> },
  { text: 'Analytics', path: '/admin/analytics', icon: <Timeline /> },
  { text: 'Escalations', path: '/admin/escalations', icon: <WarningIcon /> },
  { text: 'System Settings', path: '/admin/system-settings', icon: <Settings /> },
  { text: 'Logout', path: '/login', icon: <ExitToApp /> },
];

const data = [
    { name: 'Jan', complaints: 400 },
    { name: 'Feb', complaints: 300 },
    { name: 'Mar', complaints: 500 },
    { name: 'Apr', complaints: 450 },
    { name: 'May', complaints: 600 },
    { name: 'Jun', complaints: 550 },
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

const AdminDashboard = () => {
  return (
    <DashboardLayout menuItems={adminMenuItems} role="Admin">
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
            <StatCard title="Total Complaints" value="10,000" icon={<ListAlt />} color="#1976D2" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <StatCard title="Pending" value="1,500" icon={<HourglassEmpty />} color="#FFA000" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <StatCard title="Resolved" value="8,500" icon={<CheckCircle />} color="#388E3C" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <StatCard title="Total Officers" value="500" icon={<People />} color="#D32F2F" />
        </Grid>
        <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Complaints Trend</Typography>
                <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="complaints" stroke="#8884d8" />
                </LineChart>
                </ResponsiveContainer>
            </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
                <ComplaintHeatmap />
            </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default AdminDashboard;
