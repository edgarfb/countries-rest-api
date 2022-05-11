export const getCurrencies = (currencies) => {
  let currenciesArr = [];
  for (const key in currencies) {
    currenciesArr.push(currencies[key]);
  }
  return currenciesArr.map((currency) => (
    <span key={currency.name}>{currency.name}</span>
  ));
};

export const getLanguages = (languages) => {
  let languagesArr = [];
  for (const key in languages) {
    languagesArr.push(languages[key]);
  }
  return languagesArr.map((language) => (
    <span key={language}>{language} </span>
  ));
};
