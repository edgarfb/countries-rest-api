import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ country }) {
  const { cca3, name, flags, population, region, capital } = country;
  return (
    <div className={styles.card}>
      <div className={styles.flag}>
        <Link to={`/country-details/${cca3}`}>
          <img src={flags.png} alt={`${name.common}'s flag`} />
        </Link>
      </div>
      <div className={styles.countryData}>
        <h3>{name.common}</h3>
        <h4>
          Population: <span>{population}</span>
        </h4>
        <h4>
          Region: <span>{region}</span>
        </h4>
        <h4>
          Capital: <span>{capital}</span>
        </h4>
      </div>
    </div>
  );
}

export default Card;
