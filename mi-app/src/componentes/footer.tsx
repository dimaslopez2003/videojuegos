import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7DB24A', // Color principal del AppBar
    },
    secondary: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: 'Jolly Lodger, cursive',
  },
});

const MotionBox = motion(Box);

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" component="footer" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar sx={{ p: 3, backgroundColor: theme.palette.primary.main }}>
          <Grid container spacing={4} justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
            <Grid item xs={12} sm={6} md={4} textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h6">
                  © 2024 DALM & GAMING
                </Typography>
              </MotionBox>
            </Grid>
            <Grid item xs={12} sm={6} md={4} textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography variant="body2">
                  Contacto: montalcoarturo@gmail.com
                </Typography>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Box>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Typography
                    variant="body2"
                    component="a"
                    href="#"
                    sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: theme.palette.secondary.main } }}
                  >
                    Privacy Policy
                  </Typography>
                </MotionBox>
                <br />
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Typography
                    variant="body2"
                    component="a"
                    href="#"
                    sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: theme.palette.secondary.main } }}
                  >
                    Terms of Service
                  </Typography>
                </MotionBox>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
