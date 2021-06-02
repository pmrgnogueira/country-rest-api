import Tag from './UI/Tag';
import LinkButton from './UI/LinkButton';
import classes from './CountryDetail.module.scss';

const CountryDetail = ({ country }) => {
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
    const countryList = sessionStorage.getItem('@country-rest-api/countries');

    return borders.map(border => {
      const country = JSON.parse(countryList).filter(
        country => country.alpha3Code === border
      )[0];
      return <Tag key={country.name}>{country.name}</Tag>;
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
          {borders.length ? (
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
