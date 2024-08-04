import React from 'react';
import { List, Container, Box } from '@mui/material';
import MenuItem from './menuItem';

const MenuList = () => {
  return (
    <Container sx={{ backgroundColor: '#1e1e1e', borderRadius: '5px',padding: "0"}}>
      <Box sx={{padding: "0"}}>
        <List>
          <MenuItem icon="goals" text="Goals" />
          <MenuItem icon="popularDishes" text="Popular Dishes" />
          <MenuItem icon="menus" text="Menus" />
        </List>
      </Box>
    </Container>
  );
};

export default MenuList;
