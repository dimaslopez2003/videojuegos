import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './componentes/header';
import Footer from './componentes/footer';
import CintaOpciones from './componentes/CintaOpciones';
import Slider from './componentes/slider';
import Cards from './componentes/Cards';
import CardList  from './componentes/CardList';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from '@mui/material';


function App() {
  return (
    <div style={{ backgroundColor:'', }} className="App">
      <MenuAppBar />
      <CintaOpciones />
      <Slider />
      <div style={{ marginTop: '100px' }}>
          <CardList />
      </div>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}></Box> */}
      {/* <Box sx={{ flexGrow: 1 }}></Box> */}
      <Footer />
    </div>
  );
}


export default App;
