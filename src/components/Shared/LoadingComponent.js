import classes from './LoadingComponent.module.scss';

const LoadingComponent = () => {
  return (
    <div className={classes.Loading}>
      <div className={classes.Wrapper}>
        <div className={classes.Line}></div>
        <div className={classes.Line}></div>
        <div className={classes.Line}></div>
      </div>
      <p>Loading..</p>
    </div>
  );
};

export default LoadingComponent;
