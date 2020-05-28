import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
