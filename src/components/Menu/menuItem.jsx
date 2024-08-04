import React from 'react';
import { ListItem, ListItemText, ListItemIcon, IconButton, Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const icons = {
  goals: <SettingsIcon sx={{ color: '#FF5722' }} />,
  popularDishes: <RestaurantIcon sx={{ color: '#3F51B5' }} />,
  menus: <MenuBookIcon sx={{ color: '#009688' }} />,
};

const MenuItem = ({ icon, text }) => {
  return (
    <ListItem sx={{ backgroundColor: '#1e1e1e', color: '#FFF' }}>
      <ListItemIcon>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          backgroundColor: '#333',
          borderRadius: '50%',
        }}>
          {icons[icon]}
        </Box>
      </ListItemIcon>
      <ListItemText primary={text} />
      <IconButton edge="end" sx={{ color: '#FFF' }}>
        <ChevronRightIcon />
      </IconButton>
    </ListItem>
  );
};

export default MenuItem;
