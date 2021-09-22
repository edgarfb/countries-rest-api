import React from "react";
import styles from "./CountryDetails.module.css";
import CardDetails from "../components/CardDetails";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {
  const [country, setCountry] = React.useState({});
  const params = useParams();
  console.log(params.name);

  React.useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${params.name}`)
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

  return (
    <div>
      <Link to="/">
        <a className={styles.back}>Back</a>
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
