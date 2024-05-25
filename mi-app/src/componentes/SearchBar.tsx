import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7DB24A',
    },
  },
});

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
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
                <SearchIcon sx={{ color: 'white' }} />
              </IconButton>
            </InputAdornment>
          ),
          style: { color: 'white' },
        }}
        sx={{
          width: '100%',
          maxWidth: 300,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'lightgray',
            },
            transition: 'transform 0.25s cubic-bezier(0, 0, 0, 1)',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          },
        }}
      />
    </ThemeProvider>
  );
}
