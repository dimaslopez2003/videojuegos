import * as React from 'react';
import { Grid, Typography, Box, Card, CardHeader, CardMedia, CardContent, CardActions } from '@mui/material';
import Footer from '../componentes/footer';
import MenuAppBar from '../componentes/header';
import { Novs } from '../data/Nov';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const Novedades: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
            <MenuAppBar />
            <Box sx={{ position: 'relative', p: 4, overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Background gif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontFamily: 'Jolly Lodger, cursive' }}>
                    Novedades
                </Typography>
                <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ position: 'relative', zIndex: 1 }}>
                    {Novs.map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: '#84a98c',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                <CardHeader
                                    avatar={
                                        <Box component="img" src={card.avatarImage} sx={{ width: 40, height: 40, mr: 2 }} />
                                    }
                                    title={<Typography variant="h6" sx={{ fontFamily: 'Jolly Lodger, cursive', color: 'white' }}>{card.title}</Typography>}
                                    subheader={<Typography variant="subtitle1" sx={{ color: 'white' }}>{card.subheader}</Typography>}
                                    sx={{ p: 2 }}
                                />
                                <CardMedia
                                    component="img"
                                    image={card.image}
                                    alt={card.title}
                                    sx={{ width: '100%', height: 194, objectFit: 'cover' }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="body2" sx={{ fontFamily: 'Jolly Lodger, cursive', color: 'white' }}>
                                        {card.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center', p: 2 }}>
                                    <FacebookShareButton url={window.location.href} title={card.title}>
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <TwitterShareButton url={window.location.href} title={card.title}>
                                        <TwitterIcon size={32} round />
                                    </TwitterShareButton>
                                    <WhatsappShareButton url={window.location.href} title={card.title}>
                                        <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
};

export default Novedades;
