import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { FilteringContextProvider } from './store/filter-context';
import './index.scss';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <FilteringContextProvider>
      <App />
    </FilteringContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
