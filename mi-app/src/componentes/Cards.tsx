// src/components/Card.tsx
import React from 'react';
import { Card as MUICard, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { CardData } from '../data/cards';


const Card: React.FC<CardData> = ({ title, description, image }) => {
  return (
    <MUICard sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Jolly Lodger, cursive' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </MUICard>
  );
}

export default Card;
