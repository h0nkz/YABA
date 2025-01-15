import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './state/store.ts'

import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#023047',
    },
    secondary: {
      main: '#FFB703',
    },
    background: {
      default: '#e0e5e6',
      paper: '#f4f4f5',
    },
    error: {
      main: '#bc3f25',
    },
    info: {
      main: '#bc2525',
    },
    success: {
      main: '#46c54b',
    },
    divider: 'rgba(0,0,0,0.39)',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </Provider>
  ,
)
