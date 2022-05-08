const randomCountries = (countries) => {
  let init = Math.floor(Math.random() * countries.length - 10);
  if (init < 0) return (init = 0);
  const end = init + 10;
  return countries.slice(init, end);
};

export default randomCountries;
