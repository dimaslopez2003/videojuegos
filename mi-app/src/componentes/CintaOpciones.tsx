import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Populares from '../routes/Populares';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';
import { List } from '@mui/material';

const MotionButton = motion(Button);
const menuItems = [
  { text: 'Catálogo', path: '#' },
  { text: 'Más Populares', path: '/populares' },
  { text: 'Novedades', path: '#' },
  { text: 'Ofertas', path: '#' },
];

export default function Opciones() {
  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ justifyContent: 'center', backgroundColor: '#52696f' }}>
        {menuItems.map((item) => (
          <Link to={item.path}>
          <MotionButton 
            color="inherit" 
            sx={{ color: 'white', mx: 2 }} 
            whileHover={{ scale: 1.2, color: "#8792eb" }} 
            transition={{ duration: 0.3 }}
            key={item.text}
          >
            <Typography 
              variant="body1" 
              sx={{ fontFamily: 'Jolly Lodger, cursive' }}
            >
              {item.text}
            </Typography>
          </MotionButton>
            </Link> 
        ))}
      </Toolbar>
    </AppBar>
  );
}
