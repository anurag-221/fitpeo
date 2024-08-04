import React from 'react';
import { Paper, IconButton, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Logout, Home, Settings, Notifications, Help } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    position: 'fixed',
    top: 50,
    left: 0,
    width: '30px', // Adjust width as needed
    height: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflowY: 'auto',
  },
  icons: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconButton: {
    color: '#fff',
    marginBottom: '10px',
  },
  logoutButton: {
    color: '#fff',
    marginTop: 'auto',
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Paper sx={{
        backgroundColor: '#1e1e1e'}} className={classes.sidebar}>
      <Box sx={{gap:'15px'}} className={classes.icons}>
        <IconButton sx={{
        color: '#fff'}} className={classes.iconButton}>
          <Home />
        </IconButton>
        <IconButton sx={{
        color: '#fff'}} className={classes.iconButton}>
          <Settings />
        </IconButton>
        <IconButton sx={{
        color: '#fff'}} className={classes.iconButton}>
          <Notifications />
        </IconButton>
        <IconButton sx={{
        color: '#fff'}} className={classes.iconButton}>
          <Help />
        </IconButton>
      </Box>
      <IconButton sx={{paddingBottom:'2rem', color: '#fff'}} className={classes.logoutButton}>
        <Logout />
      </IconButton>
    </Paper>
  );
};

export default Sidebar;
