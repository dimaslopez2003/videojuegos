// src/componentes/NinCardList.tsx
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import NinCard from './NinCard';
import { cardsNintendo } from '../data/CardsNintendo';

const NinCardList: React.FC = () => {
  const halfIndex = Math.ceil(cardsNintendo.length / 2);
  const upperCards = cardsNintendo.slice(0, halfIndex);
  const lowerCards = cardsNintendo.slice(halfIndex);

  return (
    <div>
      <Typography variant="h4" sx={{ margin: 2 }}></Typography>
      <Grid container spacing={2}>
        {upperCards.map((data, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <NinCard data={data} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" sx={{ margin: 2, marginTop: 4 }}></Typography>
      <Grid container spacing={2}>
        {lowerCards.map((data, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <NinCard data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NinCardList;
