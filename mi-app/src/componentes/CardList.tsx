import * as React from 'react';
import Cards from '../componentes/Cards';
import { cardsData } from '../data/cards';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography } from '@mui/material';

const CardList: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 6, m: 6 }}>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                {cardsData.map((card, index) => (
                    <Grid item key={index} xs={6} sm={6} md={4} lg={3} xl={6}>
                        <Cards
                            title={card.title}
                            description={card.description}
                            image={card.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default CardList;
