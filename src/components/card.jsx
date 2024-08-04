// StatsCard.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const iconMapping = {
  'Total Orders': <ShoppingCartIcon style={{ color: '#3b82f6', fontSize: 40 }} />,
  'Total Delivered': <LocalShippingIcon style={{ color: '#10b981', fontSize: 40 }} />,
  'Total Cancelled': <CancelIcon style={{ color: '#ef4444', fontSize: 40 }} />,
  'Total Revenue': <AttachMoneyIcon style={{ color: '#a855f7', fontSize: 40 }} />,
};

const StatsCard = ({ title, value, percentage }) => {
  const isPositive = !percentage.startsWith('-');
  const percentageColor = isPositive ? 'green' : 'red';
  const PercentageIcon = isPositive ? ArrowUpwardIcon : ArrowDownwardIcon;

  return (
    <Paper style={{ backgroundColor: '#1e1e1e', padding: '10px', position: 'relative' }}>
      <Box  display="flex" flexDirection="row" alignItems="start">
        <Box align="start" style={{ marginRight: '10px' }}>
          {iconMapping[title]}
          <Typography variant="h6" fontSize="small" style={{ color: '#fff' }}>
            {title}
          </Typography>
          <Typography variant="h4" style={{ color: '#fff', fontWeight:'bolder' }}>
            {value}
          </Typography>
        </Box>
      </Box>
      <Box position="absolute" bottom="10px" right="10px" display="flex" alignItems="end" style={{ color: percentageColor }}>
        <PercentageIcon fontSize="small" />
        <Typography variant="body2">
          {percentage}
        </Typography>
      </Box>
    </Paper>
  );
};

export default StatsCard;
