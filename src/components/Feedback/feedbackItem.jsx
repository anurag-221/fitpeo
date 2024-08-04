import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

const FeedbackItem = ({ feedback }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? <Star key={i} sx={{ color: '#FFD700' }} /> : <StarBorder key={i} sx={{ color: '#FFD700' }} />);
    }
    return stars;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Avatar alt={feedback.name} src={feedback.avatar} sx={{ mr: 2 }} />
        <Typography variant="h6" sx={{ color: '#FFF' }}>{feedback.name}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          {renderStars(feedback.rating)}
        </Box>
        <Typography variant="body2" sx={{ color: '#CCC', textAlign:'start' }}>{feedback.comment}</Typography>
      </Box>
    </Box>
  );
};

export default FeedbackItem;
