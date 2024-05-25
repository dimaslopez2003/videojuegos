import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

const theme = createTheme({
    palette: {
      primary: {
        main: '#52696f',
      },
      secondary: {
        main: '#DC2424',
      },
    },
  });

  const Division: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar sx={{ justifyContent: 'center' }}>
            <MotionButton 
              color="secondary" 
              sx={{ color: 'white', mx: 2 }} 
              whileHover={{ scale: 1.2, color: "#84a98c" }} 
              transition={{ duration: 0.3 }}
            >
              <Typography 
                variant="body1" 
                sx={{ fontFamily: 'Jolly Lodger, cursive', textAlign: 'center' }}
              >
                ESTRENOS DE NINTENDO
              </Typography>
            </MotionButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Division;
  

