import React from "react";
import styles from "./CountryDetails.module.css";
import CardDetails from "../components/CardDetails";
import { Link, useParams } from "react-router-dom";
import arrowLeft from "../images/arrow-left-solid.svg";
import arrowLeftWithe from "../images/arrow-left-solid-white.svg";

function CountryDetails(props) {
  const [country, setCountry] = React.useState({});
  const params = useParams();
  React.useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${params.name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        let tinyData = data.map((country) => {
          return {
            flag: country.flags.svg,
            name: country.name,
            nativeName: country.nativeName,
            population: country.population,
            region: country.region,
            subregion: country.subregion,
            capital: country.capital,
            topLevelDomain: country.topLevelDomain[0],
            currencies: country.currencies ? country.currencies[0].name : "--",
            borders: country.borders,
            bordersPath: country.borders ? country.borders.join(",") : "",
            languages: country.languages.map((lang) => lang.name).join(", "),
          };
        });
        setCountry(...tinyData);
      });
  }, [params.name]);

  return (
    <div className={styles.container}>
      <Link className={styles.back} to="/">
        <div className={styles.arrow}>
          <img
            src={props.isDark ? arrowLeftWithe : arrowLeft}
            alt="Arrow to left"
          />
        </div>
        <div className={styles.txt}>Back</div>
      </Link>

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
        borders={country.borders}
        bordersPath={country.bordersPath}
      />
    </div>
  );
}

export default CountryDetails;
