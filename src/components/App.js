import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        Hello!
      </div>
    </ThemeProvider>
  );
}

export default App;
