import classes from './Layout.module.scss';

const Layout = ({ children }) => {
  return <section className={classes.Layout}>{children}</section>;
};

export default Layout;
