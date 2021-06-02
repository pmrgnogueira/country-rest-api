import { createContext, useState } from 'react';

const FilteringContext = createContext({
  isDataFiltered: false,
  filterTherm: '',
  isFilteredBySelect: false
});

export const FilteringContextProvider = ({ children }) => {
  const [isDataFiltered, setIsDataFiltered] = useState(false);
  const [filterTherm, setFilterTherm] = useState(false);
  const [isFilteredBySelect, setIsFilteredBySelect] = useState(false);

  const filterHandler = (search, isSelect) => {
    setFilterTherm(search);
    setIsFilteredBySelect(isSelect);
    setIsDataFiltered(true);
  };

  const clearFiltering = () => {
    setFilterTherm('');
    setIsFilteredBySelect(false);
    setIsDataFiltered(false);
  };

  return (
    <FilteringContext.Provider
      value={{
        isDataFiltered,
        isFilteredBySelect,
        filterTherm,
        filterHandler,
        clearFiltering
      }}>
      {children}
    </FilteringContext.Provider>
  );
};

export default FilteringContext;
