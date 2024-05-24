// src/components/Card.tsx
import React from 'react';
import { Card as MUICard, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { CardData } from '../data/cards';

const Card: React.FC<CardData> = ({ title, description, image }) => {
  return (
    <MUICard sx={{ maxWidth: 345, background: '#84a98c' }}>
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Jolly Lodger, cursive', color: 'white' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: 'white' }}>Share</Button>
      </CardActions>
    </MUICard>
  );
}

export default Card;
