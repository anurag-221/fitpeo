// ActivityChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { BorderAllRounded } from '@mui/icons-material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: Array.from({ length: 27 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Activity',
        data: [
          5000, 10000, 5000, 13010, 2000, 3050, 3000, 4000, 5000, 2500,
          2050, 4500, 3000, 5000, 2000, 5000, 8000, 6000, 4000, 13000,
          11000, 4000, 900, 3100, 5300, 17000, 13000,
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        borderRadius: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Activity',
        color: '#FFFFFF',
        font: {
          size: 24,
          weight: 'bold', 
        },
        align: 'start',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        beginAtZero: true,
        ticks: {
            stepSize: 5000,
            callback: (value) => `${value / 1000}k`,
            max: 15000,
          },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
