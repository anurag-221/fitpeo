import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import FeedbackItem from './feedbackItem';

const feedbackData = [
  {
    name: 'Jenny Wilson',
    avatar: 'https://via.placeholder.com/150',
    rating: 5,
    comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
  },
  {
    name: 'Dianne Russell',
    avatar: 'https://via.placeholder.com/150',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Devon Lane',
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
    comment: 'Normally wings are wings, but We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Dianne Russell',
    avatar: 'https://via.placeholder.com/150',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Devon Lane',
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
    comment: 'Normally wings are wings, but We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Dianne Russell',
    avatar: 'https://via.placeholder.com/150',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Devon Lane',
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
    comment: 'Normally wings are wings, but We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Dianne Russell',
    avatar: 'https://via.placeholder.com/150',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Devon Lane',
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
    comment: 'Normally wings are wings, but We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Dianne Russell',
    avatar: 'https://via.placeholder.com/150',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Devon Lane',
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
    comment: 'Normally wings are wings, but We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Dianne Russell',
    avatar: 'https://via.placeholder.com/150',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Devon Lane',
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
    comment: 'Normally wings are wings, but We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Dianne Russell',
    avatar: 'https://via.placeholder.com/150',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Devon Lane',
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
    comment: 'Normally wings are wings, but We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Dianne Russell',
    avatar: 'https://via.placeholder.com/150',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  ,
  {
    name: 'Dianne Russell',
    avatar: 'https://via.placeholder.com/150',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Devon Lane',
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
    comment: 'Normally wings are wings, but We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Dianne Russell',
    avatar: 'https://via.placeholder.com/150',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Devon Lane',
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
    comment: 'Normally wings are wings, but We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Devon Lane',
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
    comment: 'Normally wings are wings, but We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
];

const FeedbackList = () => {
  return (
    <Paper
      sx={{
        backgroundColor: '#1e1e1e',
        maxHeight: '535px',
        overflowY: 'auto',
        '::-webkit-scrollbar': {
          width: '8px',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#888',
          borderRadius: '4px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555',
        },
        'scrollbar-width': 'thin', /* Firefox */
        'scrollbar-color': '#888 #1e1e1e', /* Firefox */
        '&:hover': {
          '::-webkit-scrollbar-thumb': {
            visibility: 'visible',
          },
        },
      }}
    >
      <Typography variant="h6" sx={{ color: '#FFF', mb: 2, textAlign:'start' }}>Customer's Feedback</Typography>
      <Box>
        {feedbackData.map((feedback, index) => (
          <FeedbackItem key={index} feedback={feedback} />
        ))}
      </Box>
    </Paper>
  );
};

export default FeedbackList;
