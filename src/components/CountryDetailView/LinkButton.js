import { Link } from 'react-router-dom';

import classes from './LinkButton.module.scss';

const LinkButton = ({ children, path }) => (
  <Link to={path} className={classes.LinkButton}>
    {children}
  </Link>
);
export default LinkButton;
