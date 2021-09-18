import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.flag}>
        <img src={props.img} alt={`${props.name}'s flag`} />
      </div>
      <div className={styles.countryData}>
        <h3>{props.name}</h3>
        <h4>
          Population: <span>{props.population}</span>
        </h4>
        <h4>
          Region: <span>{props.region}</span>
        </h4>
        <h4>
          Capital: <span>{props.capital}</span>
        </h4>
      </div>
    </div>
  );
}

export default Card;