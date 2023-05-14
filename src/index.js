import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { StyledEngineProvider } from '@mui/material/styles';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { green, purple } from '@mui/material/colors';

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: green[500],
//     },
//   },
// });
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);
