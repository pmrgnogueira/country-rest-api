import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';

import { THEME } from '../../helper/contants';
import classes from './Header.module.scss';

const Header = ({ toggleTheme, theme }) => {
  console.log('Header');
  return (
    <header className={classes.Header}>
      <div className={classes.Content}>
        <h1>Where in the World?</h1>
        <button onClick={toggleTheme}>
          {theme === THEME.DARK ? <IoMoonSharp /> : <IoMoonOutline />}
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
