import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import CountryListing from './pages/CountryListing';
import CountryDetails from './pages/CountryDetails';
import Header from './components/Header';
import classes from './App.module.scss';
import { THEME } from './helper/contants';

function App() {
  const [theme, setTheme] = useState(THEME.LIGHT);

  const toggleThemeHandler = () => {
    setTheme(prev => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  };

  return (
    <main className={classes.App} data-theme={theme}>
      <Header toggleTheme={toggleThemeHandler} theme={theme} />
      <Switch>
        <Route path='/' exact>
          <CountryListing />
        </Route>
        <Route path='/country/:id'>
          <CountryDetails />
        </Route>
        <Route path='*'>
          <p>404 not found</p>
        </Route>
      </Switch>
    </main>
  );
}

export default App;

/**
 * TODO: Detail Page
 * TODO: useFetch to fetch data
 * TODO: useDebounce to debounce
 * TODO: Create Context in order to have the global search therm being used to avoid loosing past selection on page change
 *
 */
