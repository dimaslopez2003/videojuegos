import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#7DB24A', // Color principal del AppBar
      },
    },
  });

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Aquí puedes manejar la lógica de búsqueda, como filtrar una lista o hacer una solicitud a una API
    console.log('Searching for:', searchTerm);
  };

  return (
    <ThemeProvider theme={theme}>
    <TextField
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Buscar..."
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
          
        ),
      }}
      sx={{ width: '100%', maxWidth: 300 }} // Ajusta el tamaño del buscador según tus necesidades
    />
    </ThemeProvider>
  );
}
