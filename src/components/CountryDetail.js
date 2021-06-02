import { useContext } from 'react';

import Tag from './UI/Tag';
import LinkButton from './UI/LinkButton';
import classes from './CountryDetail.module.scss';
import FilteringContext from '../store/filter-context';

const CountryDetail = ({ country }) => {
  const { countries } = useContext(FilteringContext);
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

  function getBorderTags(borders) {
    return borders.map(border => {
      const borderCountry = countries.filter(c => {
        return c.alpha3Code === border;
      })[0];
      return <Tag key={borderCountry.name}>{borderCountry.name}</Tag>;
    });
  }

  return (
    <>
      <LinkButton>Back</LinkButton>
      <div className={classes.CountryDetail}>
        <div className={classes.Img}>
          <img src={flag} width='100%' alt={`${name} flag`} />
        </div>
        <div className={classes.Info}>
          <h1>{name || 'N/a'}</h1>
          <div className={classes.Details}>
            <p>
              <span>Native Name: </span>
              {nativeName || 'N/a'}
            </p>
            <p>
              <span>Population: </span>
              {population || 'N/a'}
            </p>
            <p>
              <span>Region: </span>
              {region || 'N/a'}
            </p>
            <p>
              <span>Sub Region: </span>
              {subregion || 'N/a'}
            </p>
            <p>
              <span>Capital: </span>
              {capital || 'N/a'}
            </p>
            <p>
              <span>Top Level Domain: </span>
              {topLevelDomain.join(',') || 'N/a'}
            </p>
            <p>
              <span>Currency: </span>
              {currencies[0].name || 'N/a'}
            </p>
            <p>
              <span>Languages: </span>
              {languages.map(lang => lang.name).join(', ') || 'N/a'}
            </p>
          </div>
          {borders.length && countries.length ? (
            <div className={classes.Borders}>
              <p>Border Countries:</p>
              {getBorderTags(borders)}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
