import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#299B93',
    },
    secondary: {
      main: '#299B93',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          fontSize: '1rem', 
          backgroundColor: '#299B93',
          '&:hover': {
            backgroundColor: '#005f60', 
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '1.1rem', 
        },
      },
    },
  },
});

export default theme;
