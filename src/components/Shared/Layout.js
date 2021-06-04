import classes from './Layout.module.scss';

const Layout = ({ children }) => {
  return <div className={classes.Layout}>{children}</div>;
};

export default Layout;
