import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { Notifications as NotificationsIcon } from '@mui/icons-material';

const DashboardLayout = ({ children, menuItems, role }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Smart Public Complaint System
          </Typography>
          <NotificationsIcon />
        </Toolbar>
      </AppBar>
      <Sidebar menuItems={menuItems} role={role} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
