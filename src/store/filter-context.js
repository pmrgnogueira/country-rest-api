import { createContext, useState } from 'react';

const FilteringContext = createContext({
  countries: [],
  filteredCountries: [],
  filterTherm: '',
  isFilteredBySelect: false
});

export const FilteringContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [filterTherm, setFilterTherm] = useState('');
  const [isFilteredBySelect, setIsFilteredBySelect] = useState(false);

  const updateCountries = countries => {
    setCountries(countries);
  };

  const updateFilteredCountries = filtered => {
    setFilteredCountries(filtered);
  };

  const filterHandler = search => {
    setFilterTherm(search);
  };

  const selectHandler = isSelect => {
    setIsFilteredBySelect(isSelect);
  };

  return (
    <FilteringContext.Provider
      value={{
        countries,
        updateCountries,
        filteredCountries,
        updateFilteredCountries,
        isFilteredBySelect,
        filterTherm,
        filterHandler,
        selectHandler
      }}>
      {children}
    </FilteringContext.Provider>
  );
};

export default FilteringContext;
