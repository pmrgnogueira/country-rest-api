import { useContext } from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import LinkButton from './LinkButton';
import classes from './CountryDetails.module.scss';
import CountryContext from '../../store/country-context';

const CountryDetail = ({ country }) => {
  const { countries } = useContext(CountryContext);
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = country;

  function countryBordersLinks(borders) {
    return borders.map(border => {
      const borderCountry = countries.filter(c => {
        return c.alpha3Code === border;
      })[0];
      return (
        <LinkButton
          key={borderCountry.name}
          path={`/country/${borderCountry.alpha3Code}`}>
          {borderCountry.name}
        </LinkButton>
      );
    });
  }

  let countryBorders = null;

  if (borders.length && countries) {
    countryBorders = (
      <div className={classes.Borders}>
        <p>Border Countries:</p>
        {countryBordersLinks(borders)}
      </div>
    );
  }

  return (
    <>
      <LinkButton path='/'>
        <HiOutlineArrowNarrowLeft />
        Back
      </LinkButton>
      <div className={classes.CountryDetail}>
        <div className={classes.Img}>
          <img src={flag} width='100%' alt={`${name} flag`} />
        </div>
        <div className={classes.Info}>
          <h1>{name}</h1>
          <div className={classes.Details}>
            <p>
              <span>Native Name: </span>
              {nativeName}
            </p>
            <p>
              <span>Population: </span>
              {population}
            </p>
            <p>
              <span>Region: </span>
              {region}
            </p>
            <p>
              <span>Sub Region: </span>
              {subregion}
            </p>
            <p>
              <span>Capital: </span>
              {capital}
            </p>
            <p>
              <span>Top Level Domain: </span>
              {topLevelDomain.join(',')}
            </p>
            <p>
              <span>Currency: </span>
              {currencies[0].name}
            </p>
            <p>
              <span>Languages: </span>
              {languages.map(lang => lang.name).join(', ')}
            </p>
          </div>
          {countryBorders}
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
