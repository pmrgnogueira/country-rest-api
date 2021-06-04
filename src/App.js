import { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';

import CountryListing from './pages/CountryListing';
import CountryOverview from './pages/CountryOverview';
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
 * Fixes:
 * //Remover dependencias de testes que deviam ser Dev
 * Simplificar o Context. Têm fncs duplicadas, e não precisa do emptyResults. inicializar com null para simplificar
 * Store só preciso dos países que é a cena que é partilhada entre todos, o resto pode ser feito sem isso
 * Usar o useCallback para funções que estão a ser inicializadas. React Reconciliation Process
 * Tentar simplificar o CountryListing: useCountries para fazer fetch dos countries error e computar o loading
 * Trocar o regExp por um findIndexOf (por ser menos pesado)
 * Search e maybe select não precisam de estado interno como uso o hook
 * 2 methodos separados para a filtragem do search/select
 * Corrigir o style do Select
 * Adicionar safe guard ao search para devolver null caso o searchTerm esteja vaziu
 * retirar o this do debouncer
 * Reorganizar as pastas dos componentes de forma a fazer mais sentido, talvez trocar alguns nomes
 * Ter uma pasta de componentes por rota
 */
