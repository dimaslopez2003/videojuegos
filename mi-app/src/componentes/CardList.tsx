import * as React from 'react';
import Cards from '../componentes/Cards';
import { cardsData } from '../data/cards';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography } from '@mui/material';

const gif = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';
export interface CardData {
    title: string;
    description: string;
    image: string;
    url: string;
}

const CardList: React.FC = () => {
    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: '#52696f' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Jolly Lodger, cursive', color: '#ffffff' }}>
                        Plataformas
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ position: 'relative', p: 4, backgroundColor: '#f0f0f0', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                    <img src={gif} alt="gif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
                    {cardsData.map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
                            <Cards
                                title={card.title}
                                description={card.description}
                                image={card.image}
                                url={card.url}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default CardList;
