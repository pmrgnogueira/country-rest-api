import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';

import { THEME } from '../helper/contants';
import classes from './Header.module.scss';

const Header = ({ onThemeToggle, theme }) => {
  return (
    <header className={classes.Header}>
      <h1>Where in the World?</h1>
      <button onClick={onThemeToggle}>
        {theme === THEME.DARK ? <IoMoonSharp /> : <IoMoonOutline />}
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
