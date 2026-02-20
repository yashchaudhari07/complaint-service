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
  Typography,
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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

const ManageCategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Road Damage' },
    { id: 2, name: 'Waste Management' },
    { id: 3, name: 'Water Supply' },
  ]);
  const [open, setOpen] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCategory = () => {
    setCategories([...categories, { id: categories.length + 1, name: newCategory }]);
    setNewCategory('');
    handleClose();
  };

  return (
    <DashboardLayout menuItems={adminMenuItems} role="Admin">
      <Typography variant="h4" gutterBottom>
        Manage Categories
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" onClick={handleClickOpen}>
          Add Category
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category ID</TableCell>
              <TableCell>Category Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.id}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>
                  <Button variant="outlined" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Category Name"
            type="text"
            fullWidth
            variant="standard"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddCategory}>Add</Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
};

export default ManageCategories;
