import classes from './Loading.module.scss';

const Loading = () => {
  return (
    <section className={classes.Loading}>
      <div className={classes.Wrapper}>
        <div className={classes.Line}></div>
        <div className={classes.Line}></div>
        <div className={classes.Line}></div>
      </div>
      <p>Loading...</p>
    </section>
  );
};

export default Loading;
