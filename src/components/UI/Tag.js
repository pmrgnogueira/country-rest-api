import classes from './Tag.module.scss';

const Tag = ({ children }) => <span className={classes.Tag}>{children}</span>;
export default Tag;
