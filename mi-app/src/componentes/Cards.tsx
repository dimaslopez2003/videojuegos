import * as React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

interface CardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const Cards: React.FC<CardProps> = ({ title, description, image, url }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        background: '#84a98c', 
        margin: 2, 
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
        }
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Jolly Lodger, cursive', color: 'white' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: 'white' }} href={url} target="_blank" rel="noopener noreferrer">Ver más</Button>
      </CardActions>
    </Card>
  );
}

export default Cards;
