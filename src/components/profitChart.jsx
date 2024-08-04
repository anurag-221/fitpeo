import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const ProfitCard = () => {
  const data = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#3b82f6', '#66c0fa'],
        hoverBackgroundColor: ['#66BB6A', '#A9A9A9'],
      },
    ],
    labels: ['Completed', 'Remaining'],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Card sx={{ backgroundColor: '#1e1e1e', color: '#FFF', padding:'10px' }}>
      <CardContent align="start" sx={{ p:0, '&:last-child': { pb: 0 }}}>
        <Box display="flex" alignItems="start" justifyContent="space-between">
          <Box display='flex' justifyContent="space-around" flexDirection="column">
            <Typography fontSize="small" variant="h6">Net Profit</Typography>
            <Typography variant="h3">$ 6759.25</Typography>
            <Typography variant="subtitle1" color="success.main">▲ 3%</Typography>
          </Box>
          <Box width="100px" height="100px">
            <Doughnut data={data} options={options} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfitCard;
