import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import DashboardLayout from '../../layouts/DashboardLayout';
import {
  Dashboard as DashboardIcon,
  AddCircleOutline,
  ListAlt,
  Person,
  Notifications as NotificationsIcon,
  ExitToApp,
} from '@mui/icons-material';

const citizenMenuItems = [
  { text: 'Dashboard', path: '/citizen/dashboard', icon: <DashboardIcon /> },
  { text: 'Submit Complaint', path: '/citizen/submit-complaint', icon: <AddCircleOutline /> },
  { text: 'My Complaints', path: '/citizen/my-complaints', icon: <ListAlt /> },
  { text: 'Profile', path: '/citizen/profile', icon: <Person /> },
  { text: 'Notifications', path: '/citizen/notifications', icon: <NotificationsIcon /> },
  { text: 'Logout', path: '/login', icon: <ExitToApp /> },
];

const notifications = [
  {
    id: 1,
    primary: 'Complaint Status Updated',
    secondary: 'Your complaint #CPC-2026-0001 status has been updated to "In Progress".',
  },
  {
    id: 2,
    primary: 'New Remark Added',
    secondary: 'An officer has added a new remark to your complaint #CPC-2026-0001.',
  },
  {
    id: 3,
    primary: 'Complaint Resolved',
    secondary: 'Your complaint #CPC-2026-0002 has been resolved.',
  },
];

const CitizenNotifications = () => {
  return (
    <DashboardLayout menuItems={citizenMenuItems} role="Citizen">
      <Typography variant="h4" gutterBottom>
        Notifications
      </Typography>
      <Paper>
        <List>
          {notifications.map((notification, index) => (
            <React.Fragment key={notification.id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={notification.primary}
                  secondary={notification.secondary}
                />
              </ListItem>
              {index < notifications.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </DashboardLayout>
  );
};

export default CitizenNotifications;
