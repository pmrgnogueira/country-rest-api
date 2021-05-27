import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import CountryListing from './pages/CountryListing';
import CountryDetails from './pages/CountryDetails';
import Header from './components/Header';
import classes from './App.module.scss';

const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

function App() {
  const [theme, setTheme] = useState(THEME_LIGHT);

  const toggleThemeHandler = () => {
    setTheme(prev => (prev === THEME_LIGHT ? THEME_DARK : THEME_LIGHT));
  };

  return (
    <main className={classes.App} data-theme={theme}>
      <Header onThemeToggle={toggleThemeHandler} />
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
