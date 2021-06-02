import { Link } from 'react-router-dom';
import classes from './CountryCard.module.scss';

const CountryCard = ({
  flag,
  name,
  population,
  region,
  capital,
  searchTerm
}) => {
  return (
    <div className={classes.CountryCard}>
      <Link to={`/country/${searchTerm}`}>
        <div
          className={classes.Flag}
          style={{ backgroundImage: `url(${flag})` }}></div>
        <div className={classes.Description}>
          <h4>{name}</h4>
          <p>
            <span>Populalation:</span> {population}
          </p>
          <p>
            <span>Region:</span> {region}
          </p>
          <p>
            <span>Capital:</span> {capital}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
