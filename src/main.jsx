import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#8561c5',
      main: '#673ab7',
      dark: '#482880',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c2b0e2',
      main: '#b39ddb',
      dark: '#7d6d99',
      contrastText: '#000',
    },
    action : {
      main : '#33691e',
      light : '#c1ff7a'
    },
    error : {
      main : '#b71c1c',
      light : '#FF7474'
    }
  },
});

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
