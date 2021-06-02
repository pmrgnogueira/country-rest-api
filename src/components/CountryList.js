import CountryCard from './CountryCard';
import classes from './CountryList.module.scss';

const CountryList = ({ countries }) => {
  const countryCards = countries.map(country => {
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

  return <div className={classes.CountryList}>{countryCards}</div>;
};

export default CountryList;
