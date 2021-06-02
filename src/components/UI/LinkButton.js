import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import classes from './LinkButton.module.scss';

const LinkButton = ({ children }) => (
  <Link to='/' className={classes.LinkButton}>
    <HiOutlineArrowNarrowLeft />
    {children}
  </Link>
);
export default LinkButton;
