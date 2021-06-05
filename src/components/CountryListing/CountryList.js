import CountryCard from './CountryCard';
import classes from './CountryList.module.scss';
import ErrorComponent from '../Shared/ErrorComponent';

const CountryList = ({ countries }) => {
  let content = <ErrorComponent message={'No Countries Found'} />;

  if (countries && countries.length) {
    content = countries.map(country => {
      return (
        <CountryCard
          key={country.name}
          searchTerm={country.alpha2Code}
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      );
    });
  }

  return <div className={classes.CountryList}>{content}</div>;
};

export default CountryList;
