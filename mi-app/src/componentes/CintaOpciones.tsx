import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

export default function Opciones() {
  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ justifyContent: 'center', backgroundColor: 'black' }}>
        <MotionButton 
          color="inherit" 
          sx={{ color: 'white', mx: 2 }} 
          whileHover={{ scale: 1.2, color: "#8792eb" }} 
          transition={{ duration: 0.3 }}
        >
          <Typography 
            variant="body1" 
            sx={{ fontFamily: 'Jolly Lodger, cursive' }}
          >
            Catálogo
          </Typography>
        </MotionButton>
        <MotionButton 
          color="inherit" 
          sx={{ color: 'white', mx: 2 }} 
          whileHover={{ scale: 1.2, color: "#8792eb" }} 
          transition={{ duration: 0.3 }}
        >
          <Typography 
            variant="body1" 
            sx={{ fontFamily: 'Jolly Lodger, cursive' }}
          >
            Más Populares
          </Typography>
        </MotionButton>
        <MotionButton 
          color="inherit" 
          sx={{ color: 'white', mx: 2 }} 
          whileHover={{ scale: 1.2, color: "#8792eb" }} 
          transition={{ duration: 0.3 }}
        >
          <Typography 
            variant="body1" 
            sx={{ fontFamily: 'Jolly Lodger, cursive' }}
          >
            Novedades
          </Typography>
        </MotionButton>
        <MotionButton 
          color="inherit" 
          sx={{ color: 'white', mx: 2 }} 
          whileHover={{ scale: 1.2, color: "#8792eb" }} 
          transition={{ duration: 0.3 }}
        >
          <Typography 
            variant="body1" 
            sx={{ fontFamily: 'Jolly Lodger, cursive' }}
          >
            Ofertas
          </Typography>
        </MotionButton>
      </Toolbar>
    </AppBar>
  );
}
