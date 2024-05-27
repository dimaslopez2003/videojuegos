import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import NinCard from './NinCard';
import { cardsNintendo } from '../data/CardsNintendo';

const NinCardList: React.FC = () => {
  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {cardsNintendo.map((data, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={3} sx={{ display: 'flex' }}>
            <NinCard data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NinCardList;
