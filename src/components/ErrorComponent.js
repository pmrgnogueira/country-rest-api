import classes from './ErrorComponent.module.scss';

const ErrorComponent = ({ message }) => {
  return (
    <div className={classes.ErrorComponent}>
      <p className={classes.SadEmoji}>{':('}</p>
      <p>{message}</p>
    </div>
  );
};

export default ErrorComponent;
