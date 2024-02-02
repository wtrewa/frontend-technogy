import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react';
import { fonts } from './Theme';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const theme = extendTheme({fonts})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <ChakraProvider theme={theme}>
 <BrowserRouter>
    <App />
  </BrowserRouter> 
    </ChakraProvider>
    </Provider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
