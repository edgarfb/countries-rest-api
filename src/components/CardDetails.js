import React from "react";
import styles from "./CardDetails.module.css";
import { Link } from "react-router-dom";
import { getCurrencies, getLanguages } from "../utils/flatCountriesData";

function Border({ alphaCode }) {
  return (
    <Link to={`/country-details/${alphaCode}`} className={styles.border}>
      {alphaCode}
    </Link>
  );
}

// Main
function CardDetails({ country }) {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    currencies,
    languages,
    // Top Lavel Domain
    tld,
    borders,
  } = country;
  return (
    <div className={styles.cardDetails}>
      <div className={styles.flag}>
        <img src={flags.png} alt={`${name.common} flag`} />
      </div>

      <div className={styles.countryData}>
        <h3>{name.common}</h3>

        <div className={styles.countryDataInner}>
          <div className={styles.mainData}>
            <h4>
              Native Name: <span>{name.official}</span>
            </h4>
            <h4>
              Population: <span>{population}</span>
            </h4>
            <h4>
              Region: <span>{region}</span>
            </h4>
            <h4>
              Sub Region: <span>{subregion}</span>
            </h4>
            <h4>
              Capital:{" "}
              <span>
                {capital !== undefined
                  ? capital[0]
                  : "This country has no Capital"}
              </span>
            </h4>
          </div>
          <div className={styles.secondaryData}>
            <h4>
              Top Lavel Domain: <span>{tld}</span>
            </h4>
            <h4>Currencies: {getCurrencies(currencies)}</h4>
            <h4>Languages: {getLanguages(languages)}</h4>
          </div>
        </div>
        <div className={styles.borderCountries}>
          <h4>Border Countries: </h4>
          {borders !== undefined
            ? borders.map((border) => (
                <Border key={border} alphaCode={border} />
              ))
            : "This country has no borders"}
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
