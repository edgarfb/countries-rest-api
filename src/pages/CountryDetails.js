import React from "react";
import styles from "./CountryDetails.module.css";
import CardDetails from "../components/CardDetails";
import { Link } from "react-router-dom";

function CountryDetails() {
  const [country, setCountry] = React.useState({});
  const path = "Germany";

  React.useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${path}`)
      .then((res) => res.json())
      .then((data) => {
        let tinyData = data.map((d) => {
          return {
            flag: d.flag,
            name: d.name,
            nativeName: d.nativeName,
            population: d.population,
            region: d.region,
            subregion: d.subregion,
            capital: d.capital,
            topLevelDomain: d.topLevelDomain[0],
            currencies: d.currencies[0].name,
            languages: d.languages.map((l) => l.name).join(", "),
          };
        });
        setCountry(...tinyData);
      });
  }, []);

  console.log(country);
  return (
    <div>
      <Link to="/">
        <a>Home</a>
      </Link>
      <h1>Countries detalis</h1>
      <CardDetails
        flag={country.flag}
        name={country.name}
        nativeName={country.nativeName}
        population={country.population}
        region={country.region}
        subregion={country.subregion}
        capital={country.capital}
        topLevelDomain={country.topLevelDomain}
        currencies={country.currencies}
        languages={country.languages}
      />
    </div>
  );
}

export default CountryDetails;
