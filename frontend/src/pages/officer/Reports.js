import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import DashboardLayout from '../../layouts/DashboardLayout';
import {
  Dashboard as DashboardIcon,
  Assignment,
  Update,
  Assessment,
  Person,
  ExitToApp,
} from '@mui/icons-material';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const officerMenuItems = [
    { text: 'Dashboard', path: '/officer/dashboard', icon: <DashboardIcon /> },
    { text: 'Assigned Complaints', path: '/officer/assigned-complaints', icon: <Assignment /> },
    { text: 'Update Status', path: '/officer/update-status', icon: <Update /> },
    { text: 'Reports', path: '/officer/reports', icon: <Assessment /> },
    { text: 'Profile', path: '/officer/profile', icon: <Person /> },
    { text: 'Logout', path: '/login', icon: <ExitToApp /> },
  ];

const categoryData = [
  { name: 'Road Damage', count: 12 },
  { name: 'Water Leakage', count: 8 },
  { name: 'Electricity Issue', count: 5 },
  { name: 'Garbage', count: 15 },
  { name: 'Street Light', count: 7 },
];

const resolutionData = [
  { name: 'Resolved', value: 85 },
  { name: 'Pending', value: 15 },
];
const COLORS = ['#0088FE', '#FF8042'];


const OfficerReports = () => {
  return (
    <DashboardLayout menuItems={officerMenuItems} role="Officer">
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Category-wise Complaint Breakdown</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Resolution Rate</Typography>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={resolutionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={(entry) => `${entry.name}: ${entry.value}%`}
                    >
                        {resolutionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default OfficerReports;
