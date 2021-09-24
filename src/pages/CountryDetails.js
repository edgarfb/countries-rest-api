import React from "react";
import styles from "./CountryDetails.module.css";
import CardDetails from "../components/CardDetails";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {
  const [country, setCountry] = React.useState({});
  const params = useParams();

  React.useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${params.name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let tinyData = data.map((d) => {
          return {
            flag: d.flags[0],
            name: d.name,
            nativeName: d.nativeName,
            population: d.population,
            region: d.continent,
            subregion: d.region,
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
    <div className={styles.container}>
      <Link className={styles.back} to="/">
        Back
      </Link>
      {/* <h1>Countries detalis</h1> */}
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
