import { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';

import CountryListing from './pages/CountryListing';
import CountryDetailView from './pages/CountryDetailView';
import Page404 from './pages/Page404';
import Header from './components/Shared/Header';
import classes from './App.module.scss';
import { THEME } from './helper/contants';

function App() {
  const [theme, setTheme] = useState(THEME.LIGHT);

  const toggleThemeHandler = useCallback(() => {
    setTheme(prev => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  }, [setTheme]);

  return (
    <main className={classes.App} data-theme={theme}>
      <Header toggleTheme={toggleThemeHandler} theme={theme} />
      <Switch>
        <Route path='/' exact>
          <CountryListing />
        </Route>
        <Route path='/country/:id'>
          <CountryDetailView />
        </Route>
        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
    </main>
  );
}

export default App;

/**
 * TODO: Check React Reconciliation Problems
 * TODO: Review Styles in different Browsers ( select in dark mode)
 */
