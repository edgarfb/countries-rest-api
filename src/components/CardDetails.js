import React from "react";
import styles from "./CardDetails.module.css";

function CardDetails(props) {
  return (
    <div className={styles.cardDetails}>
      <div className={styles.flag}>
        <img src={props.flag} alt={`${props.name} flag`} />
      </div>
      <div className={styles.countryData}>
        <h3>{props.name}</h3>
        <div className={styles.countryDataInner}>
          <div className={styles.mainData}>
            <h4>
              Native Name: <span>{props.nativeName}</span>
            </h4>
            <h4>
              Population: <span>{props.population}</span>
            </h4>
            <h4>
              Region: <span>{props.region}</span>
            </h4>
            <h4>
              Sub Region: <span>{props.subregion}</span>
            </h4>
            <h4>
              Capital: <span>{props.capital}</span>
            </h4>
          </div>
          <div className={styles.secondaryData}>
            <h4>
              Top Lavel Domain: <span>{props.topLevelDomain}</span>
            </h4>
            <h4>
              Currencies: <span>{props.currencies}</span>
            </h4>
            <h4>
              Languages: <span>{props.languages}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
