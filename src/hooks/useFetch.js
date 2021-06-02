// const fetchCountries = useCallback(async () => {
//   setLoading(true);
//   try {
//     const response = await fetch(
//       'https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;capital;flag;cioc;'
//     );
//     if (!response.ok) {
//       throw new Error('Something went wrong!');
//     }
//     const data = await response.json();

//     setCountries(data);
//     sessionStorage.setItem('@country-rest-api/countries', JSON.stringify(data));
//   } catch (error) {
//     setError(error.message);
//   }
//   setLoading(false);
// }, []);
