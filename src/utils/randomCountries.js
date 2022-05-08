const randomCountries = (countries) => {
  const ramdom = Math.floor(Math.random() * countries.length - 10);
  const init = ramdom < 0 ? 0 : ramdom;
  const end = init + 10;
  return countries.slice(init, end);
};

export default randomCountries;
