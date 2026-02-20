import React from 'react';
import { Box, Typography } from '@mui/material';

// This is a mock heatmap component.
// In a real application, you would use a library like react-heatmap-grid.
const ComplaintHeatmap = () => {
  return (
    <Box>
      <Typography variant="h6">Complaint Heatmap (Mock)</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '2px', mt: 1 }}>
        {Array.from({ length: 100 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 20,
              height: 20,
              backgroundColor: `rgba(255, 0, 0, ${Math.random()})`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ComplaintHeatmap;
