import * as React from 'react';
import { Grid, Typography, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import Footer from '../componentes/footer';
import MenuAppBar from '../componentes/header';
import { pop } from '../data/pops';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const Populares: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
            <MenuAppBar />
            <Box sx={{ position: 'relative', p: 4, overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Background gif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontFamily: 'Jolly Lodger, cursive' }}>
                    Videojuegos Más Populares
                </Typography>
                <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
                    {pop.map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
                            <Box
                                sx={{
                                    backgroundColor: '#84a98c',
                                    margin: 2,
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    }
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                                    <Box component="img" src={card.avatarImage} sx={{ width: 40, height: 40, mr: 2 }} />
                                    <Box>
                                        <Typography variant="h6" sx={{ fontFamily: 'Jolly Lodger, cursive', color: 'white' }}>{card.title}</Typography>
                                        <Typography variant="subtitle1" sx={{ color: 'white' }}>{card.subheader}</Typography>
                                    </Box>
                                </Box>
                                <Box component="img" src={card.image} sx={{ width: '100%', height: 194, objectFit: 'cover' }} />
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="body2" sx={{ fontFamily: 'Jolly Lodger, cursive', color: 'white' }}>
                                        {card.description}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                                    <FacebookShareButton url={window.location.href} title={card.title}>
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <TwitterShareButton url={window.location.href} title={card.title}>
                                        <TwitterIcon size={32} round />
                                    </TwitterShareButton>
                                    <WhatsappShareButton url={window.location.href} title={card.title}>
                                        <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
};

export default Populares;
