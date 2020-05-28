import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontSize: 14,
    h1: {
      fontSize: '1.714rem',
      fontWeight: 400,
      color: '#666',
      lineHeight: 1.5
    },
    h2: {
      fontSize: '1.286rem',
      fontWeight: 500,
      color: '#333',
      lineHeight: 1.5
    },
    button: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    }
  },
  palette: {
    primary: {
      main: '#03a9f4'
    },
    success: {
      main: '#4caf50'
    },
    error: {
      main: '#f44336'
    },
    background: {
      default: '#f2f6f8'
    },
    common: {
      black: '#333',
      white: '#fff'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  shape: {
    borderRadius: 2
  }
});

export default theme;