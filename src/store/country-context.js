import { createContext, useState } from 'react';
import { REGIONAL_BLOCK } from '../helper/contants';

const CountryContext = createContext({
  countries: null,
  filteredCountries: null,
  searchTerm: '',
  selectedRegion: REGIONAL_BLOCK[0]
});

export const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState(REGIONAL_BLOCK[0]);

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        filteredCountries,
        setFilteredCountries,
        searchTerm,
        setSearchTerm,
        selectedRegion,
        setSelectedRegion
      }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
