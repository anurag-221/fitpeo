// App.js
import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from './header';
import Card from './card';
import ActivityChart from './activityChart';
import RecentOrders from './recentOrders';
import FeedbackList from './Feedback/feedbackList';
import Sidebar from './sidebar';
import ProfitChart from './profitChart';
import MenuList from './Menu/menuList';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#121212',
    color: '#cc3300',
    minHeight: '100vh',
    padding: '20px',
  },
  paper: {
    backgroundColor: '#1e1e1e',
    padding: '20px',
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="xl">
      <Header />
      <Grid sx={{ marginTop:'2rem' }} container spacing={3}>
        <Grid item xs={12} md={1}>
            <Sidebar />
        </Grid>
        <Grid item xs={12} md={11}>
            <Typography sx={{ textAlign: 'start', color: '#fff', marginBottom: '20px' }} variant="h6">
                Dashboard
            </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Card title="Total Orders" value="75" percentage="3%" />
                </Grid>
                <Grid item xs={3}>
                  <Card title="Total Delivered" value="70" percentage="-3%" />
                </Grid>
                <Grid item xs={3}>
                  <Card title="Total Cancelled" value="5" percentage="3%" />
                </Grid>
                <Grid item xs={3}>
                  <Card title="Total Revenue" value="$12k" percentage="-3%" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <ProfitChart />
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper sx={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }} className={classes.paper}>
                <ActivityChart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }} className={classes.paper}>
                <MenuList />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper sx={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }} className={classes.paper}>
                <RecentOrders />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }} className={classes.paper}>
                <FeedbackList />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
