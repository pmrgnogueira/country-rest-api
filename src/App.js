import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import CountryListing from './pages/CountryListing';
import CountryOverview from './pages/CountryOverview';
import Page404 from './pages/Page404';
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
          <CountryOverview />
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
 * TODO: Redo the Git repository
 * TODO: Do the Responsive
 * TODO: Preencher the deliveries
 */
