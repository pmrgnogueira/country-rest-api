import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { CountryContextProvider } from './store/country-context';
import './index.scss';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <CountryContextProvider>
      <App />
    </CountryContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
